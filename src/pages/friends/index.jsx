import Head from "next/head";

import { Header, Sidebar } from "../../components/index";
import { FriendsList } from "../../sections/index";

export default function Friends() {
  return (
    <>
      <div className="flex">
        <Sidebar className="flex-1" />
        <div className="flex-1">
          <Header />
          <main className="flex justify-start sm:justify-center ml-[30px] sm:ml-[120px] sm:px-4 py-6 sm:py-16">
            <FriendsList />
          </main>
        </div>
      </div>
    </>
  );
}
