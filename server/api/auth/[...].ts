import DiscordProvider from '@auth/core/providers/discord'
import { AuthConfig } from '@auth/core/types'
import { NuxtAuthHandler } from '#auth'

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig()

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [
    DiscordProvider({
      clientId: runtimeConfig.discord.clientId,
      clientSecret: runtimeConfig.discord.clientSecret,
      authorization: `https://discord.com/api/oauth2/authorize?scope=identify+guilds+guilds.join+guilds.members.read`,
    }),
  ],
  callbacks: {
    async session({session, token, user}) {
        if (session.user) {
            session.user = {
                ...session.user,
                id: token.sub,
            } as { name?: string | undefined; image?: string | undefined; id?: string | undefined };
        }
    
        return session
    }
  }
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }
