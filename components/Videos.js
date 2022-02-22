// components/Videos.js

import { gql } from "@apollo/client";
import client from "../pages/api/client";
import styles from "../styles/Home.module.css";
import React from "react";
import Poster from "./Poster";

const getAllVideos = gql`
            query getVideos($limit: Int, $search: String){
                allVideos(limit: $limit, tags: $search) {
                    cursor {
                      before
                      after
                    }
                    items {
                      id
                      name
                      poster
                      publicationDate
                      Tags {
                        name
                      }
                    }
                }
            }`;
const getAllVideosAfter = gql`
            query getVideos($limit: Int, $cursor: String){
                allVideos(limit: $limit, after: $cursor) {
                    cursor {
                      before
                      after
                    }
                    items {
                      id
                      name
                      poster
                      publicationDate
                      Tags {
                        name
                      }
                    }
                }
            }`;
const getAllVideosBefore = gql`
            query getVideos($limit: Int, $cursor: String){
                allVideos(limit: $limit, before: $cursor) {
                    cursor {
                      before
                      after
                    }
                    items {
                      id
                      name
                      poster
                      publicationDate
                      Tags {
                        name
                      }
                    }
                }
            }`;

class Videos extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            limit: props.limit != null ? props.limit : 16,
            videos: [],
            cursor_after:"",
            cursor_before:""

        }
        this.setLimit = this.setLimit.bind(this);
        this.setVideos = this.setVideos.bind(this);
        this.setCursors = this.setCursors.bind(this);
    }

    setCursors(after, before){

        if (this._isMounted) {
            this.setState({
                cursor_after: after,
                cursor_before: before
            })
        }
    }

    setLimit(value) {

        if (this._isMounted) {
            this.setState({
                limit: value,
            }, () => {
                this.fetchVideos();
            });
        }
    }

    setResultQuery(result){
        if (result.loading) {
            return <h2 className={"loading"}>Loading...</h2>;
        }

        if (result.error) {
            console.error(result.error);
            return null;
        }
        const videos = result.data.allVideos;
        this.setVideos(videos.items);
        this.setCursors(videos.cursor.after,videos.cursor.before);
    }

    fetchVideosBefore(){
        if(this.state.cursor_before != null){
            client.query({
                query: getAllVideosBefore,
                variables:{
                    limit: this.state.limit,
                    cursor: this.state.cursor_before
                }
            }).then(result => {
                    this.setResultQuery(result);
                }
            )
        }
    }

    fetchVideosAfter(){
        if(this.state.cursor_after != null){
            client.query({
                query: getAllVideosAfter,
                variables:{
                    limit: this.state.limit,
                    cursor: this.state.cursor_after
                }
            }).then(result => {
                    this.setResultQuery(result);
                }
            )
        }
    }

    setVideos(values){
        if (this._isMounted) {
            this.setState({
                videos: values
            });
        }
    }



    fetchVideos() {

        let tag = this.props.tags;

        if (this.props.tags == undefined) {
            tag = "All Videos";
        }
        let search = tag == "All Videos" ? "" : tag;

        client.query({
            query: getAllVideos,
            variables:{
                limit: this.state.limit,
                search: search
            }
        }).then(result => {
            this.setResultQuery(result);
            }
        )
    }


    componentWillUnmount(){
        this._isMounted = false;
    }
    componentDidMount() {
        this._isMounted = true;
        this.fetchVideos();
    }

    render() {
        let tag = this.props.tags;

        if (this.props.tags == undefined) {
            tag = "All Videos";
        }

        const titleTag = this.props.tags == "All Videos" ? "Similar Content" : tag;

        let button = [];

        if (this.state.limit >= 16) {
            button.push(
                <div key="1" className={"show-more-button button-cursor"} onClick={() => this.setLimit(this.state.limit+16)}>Show More</div>
            );
        } else {
            button.push(
                <div key="1" className={ "button-cursor"}>
                    <span className={'show-previous-videos' + (this.state.cursor_before == null ? " disabled" : "")} onClick={() => this.fetchVideosBefore()}>Previous</span>
                    <span className={'show-next-videos' + (this.state.cursor_after == null ? " disabled" : "")} onClick={() => this.fetchVideosAfter()}>Next</span>
                </div>
            );
        }

        return (
            <div className="videos-container width-standard">
                <h4 className={"title-tag-videos "+ titleTag} aria-valuetext={titleTag} data-testid="tags-title">{(this.props.similar && (this.props.tags == "All Videos")) ? "Similar Content" : titleTag == "" ? "All Videos" : titleTag}</h4>
                <div className={styles.grid}>
                    {this.state.videos.length == 0 ? <h2 className={"loading"}>Loading...</h2> : this.state.videos.map((item) => (
                        <Poster key={item.id} video={item} tag={tag}/>
                    ))}
                </div>
                {button}
            </div>
        );

    }

}
export default Videos;