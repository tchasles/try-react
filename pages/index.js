import Head from "next/head";
import styles from "../styles/Home.module.css";
import Videos from "../components/Videos";
import Video from "../components/Video";
import React from "react";
import Navigation from "../components/Navigation";
import Image from "next/image";
import digitalIcon from "../public/OriginsLogo.png";

export default function Home() {
  const tag = "";
  console.log(digitalIcon.src);
  return (
      <div className={styles.container}>
        <Head>
          <title>origins-video</title>
          <link rel="icon" href="/origins-digital.jpg" />
        </Head>
        <Navigation />
        <main className={styles.main + " width-full"}>
            <Video poster={"/OTT-Whitelabel-Background.png"}/>
            <Videos tags={""} similar={false}/>
        </main>

        <footer className={styles.footer + " width-standard"}>
          <a rel="icon" href="/">
            <Image src={digitalIcon.src} alt="Origins Logo" width={200} height={90} />
          </a>
        </footer>
      </div>
  );
}