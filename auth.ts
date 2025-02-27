import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async signIn({ account, profile }): Promise<boolean> {
      console.log('🚀 ~ signIn ~ profile:', profile);
      console.log('🚀 ~ signIn ~ account:', account);
      return true;
    },
    async session({ session, token, user }): Promise<any> {
      console.log('🚀 ~ session ~ user:', user);
      console.log('🚀 ~ session ~ token:', token);
      console.log('🚀 ~ session ~ session:', session);
      return session;
    },
  },
  providers: [
    Google({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
        },
      },
    }),
  ],
});
