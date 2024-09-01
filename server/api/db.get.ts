export default defineEventHandler(async ({ context }) => {
    // context.cloudflare.env.VDC_VOTING_DB.exec("INSERT INTO endorsements (discordID, discordName, endorsed) VALUES (123456, 'test', '{\"hello\":\"world\"}');")
  const ps = context.cloudflare.env.VDC_VOTING_DB.exec("INSERT INTO endorsements (discordID, discordName, endorsed) VALUES (173237627955314689, 'unieveth', '{\"hello\":\"world\"}');")
   const data = await ps
  return { data }
})
