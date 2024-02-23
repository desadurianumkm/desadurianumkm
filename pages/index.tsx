import clientPromise from "../lib/mongodb";
import { GetServerSideProps } from "next";

import Header from "./headers";
import HeaderStaticContent from "./contents/header_static_content";

import { useEffect, useState } from "react";
import Script from "next/script";

type ConnectionStatus = {
    isConnected: boolean
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  });

  return (
    <>
      <Script src="js/modernizr-2.6.2.min.js" strategy="beforeInteractive"/>
      <Script src="js/jquery.min.js" strategy="beforeInteractive"/>
      <Script src="js/jquery.easing.1.3.js" strategy="beforeInteractive"/>
      <Script src="js/bootstrap.min.js" strategy="beforeInteractive"/>
      <Script src="js/jquery.waypoints.min.js" strategy="beforeInteractive"/>
      <Script src="js/jquery.stellar.min.js" strategy="beforeInteractive"/>
      <Script src="js/jquery.flexslider-min.js" strategy="beforeInteractive"/>
      <Script src="js/main.js" />
      {isClient ? <Header /> : null}
      {isClient ? <HeaderStaticContent /> : null}
    </>
  );
}