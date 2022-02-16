// components/Videos.js

import React from "react";
import Image from 'next/image';
import digitalIcon from '../public/OriginsLogo.png'

export default function Navigation(props){

    return (
        <div className={"navigation-bar width-standard"}>
            <a className={"logo"} href={"/"} >
                <Image src={digitalIcon.src} height={90} width={200}></Image>
            </a>
            <div className={"menu"}>
                <a data-testid={"Funzone"} id={"Funzone"} className={"menu-item"} href={"/videotag/Funzone"}>Fun zone</a>
                <a id={"Testimoniales"} className={"menu-item"} href={"/videotag/Testimoniales"}>Testimoniales</a>
            </div>
        </div>
    );
};