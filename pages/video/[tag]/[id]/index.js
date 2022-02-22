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
import client from "../../../api/client";
import {gql, useQuery} from "@apollo/client";

const Detail = () => {
    const router = useRouter()
    const { tag, id } = router.query

    const QUERY = gql`
    query {
        video(id: "${id}") {   
          id
          name
          poster
          url
        }
    }
    `;
    const {data, loading, error} = useQuery(QUERY);
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }


    const video = data.video;

    return (
        <div className={styles.container}>
            <Head>
                <title></title>
            </Head>

            <Navigation></Navigation>

            <main className={styles.main + " width-standard"}>
                <div className="container width-standard">
                        <Video poster={video.poster} name={video.name}/>
                </div>
                    <Videos tags={tag} limit={4} similar={true}/>
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