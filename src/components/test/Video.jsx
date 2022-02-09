import React from "react";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import ReactPlayer from "react-player/lazy";
import ModalVideo from "react-modal-video";
import imgPlaceholder from "../../images/imgPlaceholder.jpg";
import { useState } from "react";

const Video = ({ link, img, i }) => {
  const context = useContext(MyContext);
  const { activeArticle, setActiveArticle, videoLinkMedia, setVideoLinkMedia } =
    context;

  //   const [videolink, setVideolink] = useState("");

  const initialState = { results: null, loading: true, error: null };
  const { results, loading, error } = useFetch(link, initialState);
  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;

  const videolink = results.filter((item, i) => item.endsWith("orig.mp4"));
  videoLinkMedia.push(videolink);
  console.log(videoLinkMedia);
  return (
    <div>
      {" "}
      <div>
        {videolink && (
          <div>
            {img && <img src={img} alt="" />}
            {!img && <img src={imgPlaceholder} alt="" />}
            <button className="nasa-media-btn">
              <a className="nasa-media-link" href={videolink}>
                {" "}
                see video
              </a>
            </button>
          </div>
          // <video controls width="500">
          //   <source src={videolink} type="video/mp4" />
          // </video>
        )}
      </div>
      {/* <p>{videolink}</p> */}
    </div>
  );
};

export default Video;
