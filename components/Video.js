// components/Video.tsx

import React from "react";
import ReactPlayer from 'react-player'

export default function Video(props){

    return (
        <div className="video-container">
            <h4 className="title-tag-video">{props.name}</h4>
            <ReactPlayer  light={props.poster} controls={true} url={process.env.NEXT_PUBLIC_URL_STREAM}></ReactPlayer>
        </div>
    );
};