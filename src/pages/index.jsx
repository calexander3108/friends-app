import Head from "next/head";

import { Header, Sidebar } from "../components/index";
import { Friends } from "../sections/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clerkie Challenge</title>
        <meta
          name="description"
          content="Clerkie Challenge built with create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <Sidebar className="flex-1" />
        <div className="flex-1">
          <Header />
          <main className="flex justify-start sm:justify-center ml-[30px] sm:ml-[120px] sm:px-4 py-6 sm:py-16">
            <Friends />
          </main>
        </div>
      </div>
    </>
  );
}
