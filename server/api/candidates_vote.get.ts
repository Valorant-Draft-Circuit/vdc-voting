export default defineEventHandler(async ({ context }) => {
    const ps = context.cloudflare.env.VDC_VOTING_DB.prepare(`SELECT internalname as value, displayName as label FROM candidates WHERE stage == 'final';`)
    const data = await ps.run()
    return data.results
})