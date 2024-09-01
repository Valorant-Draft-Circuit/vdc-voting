export default defineEventHandler(async ({ context }) => {
    const data = await context.cloudflare.env.VDC_VOTING_FF.get("enable-endorsements")
    return { data }
  })