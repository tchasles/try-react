import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../../styles/Home.module.css'

import { useRouter } from 'next/router'
import Video from "../../../../components/Video";
import ClientOnly from "../../../../components/ClientOnly";
import React from "react";
import Videos from "../../../../components/Videos";
import digitalIcon from '../../../../public/OriginsLogo.png'
import Navigation from "../../../../components/Navigation";

const Detail = () => {
    const router = useRouter()
    const { tag, id } = router.query

    return (
        <div className={styles.container}>
            <Head>
                <title></title>
            </Head>

            <Navigation></Navigation>

            <main className={styles.main + " width-standard"}>

                <div className="container width-standard">
                    <ClientOnly>
                        <Video id={id}/>
                    </ClientOnly>
                </div>
                <ClientOnly>
                    <Videos tags={tag} limit={4} similar={true}/>
                </ClientOnly>
            </main>



            <footer className={styles.footer + " width-standard"}>
                <a rel="icon" href="/">
                    <Image src={digitalIcon} alt="Origins Logo" width={200} height={90} />
                </a>
            </footer>
        </div>
    )
}

export default Detail