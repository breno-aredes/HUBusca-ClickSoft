import React from "react";
import Head from "next/head";

import Profile from "src/components/profile";

export default function Page() {
  return (
    <>
      <Head>
        <title>HUBusca</title>
      </Head>
      <Profile />
    </>
  );
}
