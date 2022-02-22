// components/Videos.tsx

import styles from "../styles/Home.module.css";
import React from "react";
import Image from 'next/image';
import playIcon from '../public/OTT-Whitelabel-Play.svg'

export default function Poster(props){

    const video = props.video;
    let tag = props.tag == "" ? "All Videos" : props.tag;
    return (
        <a key={video.id} className={styles.card} href={'/video/'+ tag +'/' + video.id}>
            <div className="poster">
                <div className="play-button-div">
                    <Image className="play-button" src={playIcon.src} alt="Play" height="50px" width="50px"/>
                </div>
                <object data={video.poster} type="image/png" height="150" width="250">
                    <Image src="https://cdn.sstatic.net/Img/unified/sprites.svg?v=e5e58ae7df45"
                           alt="video poster" height="150" width="250"/>
                </object>
            </div>
            <p className="videoName">{video.name}</p>
        </a>
    );
};