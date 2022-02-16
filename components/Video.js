// components/Video.tsx

import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";
import React from "react";
import ReactPlayer from 'react-player'

export default function Video(props){

    const QUERY = gql`
    query {
        video(id: "${props.id}") {   
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
        <div className="video-container">
            <h4 className="title-tag-video">{video.name}</h4>
            <ReactPlayer  light={video.poster} controls={true} url={process.env.NEXT_PUBLIC_URL_STREA}></ReactPlayer>
        </div>
    );
};