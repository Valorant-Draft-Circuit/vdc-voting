import { authOptions } from '../auth/[...]'
import { getServerSession } from '#auth'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, authOptions)

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 })
  }

  //@ts-ignore
  const ps = event.context.cloudflare.env.VDC_VOTING_DB.prepare(`SELECT COUNT(1) FROM endorsements WHERE discordID = ${session.user.id}`)
  const data = await ps.run()
  return new Response(String(data.results[0]['COUNT(1)']), { status: 200 })
})
