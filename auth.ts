import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth(
  {
    providers: [GitHub],
    callbacks: {
      async signIn({ user: { id, name, email } }) {
        if (!userExists) {
          await createUser({ id, name, email });
        }
        return true;
      },
    },
  },
);
