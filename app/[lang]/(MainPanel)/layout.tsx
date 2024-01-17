import { Roboto } from "next/font/google";

import { getServerSession } from "next-auth/next";
import SessionProvider from "@/libs/SessionProvider";
import { Metadata } from "next";
import Navbar from "@/app/components/main/Navbar";

const SS3 = Roboto({ subsets: ["cyrillic-ext"], weight: "400" });

export const metadata: Metadata = {
  title: "Ludwik Faron | Web Developer",
  description:
    "Step into Ludwik Faron's digital playground where code brings ideas to life.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <main className={SS3.className}>
      <SessionProvider session={session}>
        <Navbar />
        {children}
      </SessionProvider>
    </main>
  );
}
