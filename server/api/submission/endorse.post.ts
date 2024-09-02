import { authOptions } from '../auth/[...]'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, authOptions)

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const body = await readBody(event)

  //@ts-ignore
  if (session.user.id !== body.discordID) {
    return new Response('Unauthorized', { status: 401 })
  }

  //Make not stupid error code
  //Current -  ERROR  [nuxt] [request error] [unhandled] [500] D1_ERROR: UNIQUE constraint failed: endorsements.discordID: SQLITE_CONSTRAINT
  const ps = event.context.cloudflare.env.VDC_VOTING_DB.prepare(`INSERT INTO endorsements (discordID, discordName, endorsed) VALUES (${body.discordID}, '${body.discordName}', '${body.selcCandidates}');`)
  const data = await ps.run()

  console.log(data.success)
})
