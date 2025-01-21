import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Media } from "./payload-types";

export const { handlers, signIn, signOut, auth } = NextAuth(
  {
    providers: [GitHub],
    callbacks: {
      async signIn({
        user: { name, email, image },
        profile,
      }) {
        // TODO: ADD PAYLOAD LOCAL API AND FIND USER WITH SAME ID, if not create the user
        const payload = await getPayload({
          config: configPromise,
        });

        const userExists = await payload
          .find({
            collection: "users",
            where: {
              email: {
                equals: email,
              },
            },
          })
          .then((res) => res.docs[0]);
        console.log("userExists", userExists.fullName);

        if (!userExists.id) {
          await payload.create({
            collection: "users", // required
            data: {
              // required
              id: profile?.id,
              fullName: name,
              email: email as string,
              profileImage: image,
              password: "same",
            },
            disableVerificationEmail: true,
          });
        }
        return true;
      },
    },
  },
);
