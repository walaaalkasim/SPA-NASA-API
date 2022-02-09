import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import convertDateAstro from "../../helpers/convertDateAstro";
import { getCurrentDate } from "../../helpers/currentDate";

const AstroPic = () => {
  const context = useContext(MyContext);
  const { date, setDate } = context;
  const KEY = process.env.REACT_APP_API_KEY;

  const url = `https://api.nasa.gov/planetary/apod?api_key=${KEY}&date=${date}`;
  const initialState = { results: null, loading: true, error: null };
  const { results, loading, error } = useFetch(url, initialState);

  console.log(results);
  console.log(date);

  console.log(getCurrentDate());

  const handleNextDay = (e) => {
    const currentDayInMilli = new Date(e.target.value).getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const previousDayInMilli = currentDayInMilli + oneDay;

    setDate(convertDateAstro(new Date(previousDayInMilli)));
  };
  const handlePrevDay = (e) => {
    const currentDayInMilli = new Date(e.target.value).getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const previousDayInMilli = currentDayInMilli - oneDay;
    setDate(convertDateAstro(new Date(previousDayInMilli)));
  };

  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="astronomy-content-container">
      {/* <div>date :{results.date}</div>
      <div>description {results.explanation}</div> */}

      <div className="media-container-astronomy">
        <div className="date-picker">
          <button
            className="astronomy-btn"
            value={results.date}
            onClick={(e) => handlePrevDay(e)}
          >
            previous
          </button>
          {results.date !== getCurrentDate() && (
            <button
              className="astronomy-btn"
              value={results.date}
              onClick={(e) => handleNextDay(e)}
            >
              {" "}
              next{" "}
            </button>
          )}
        </div>
        {results.media_type === "image" && (
          <img width="100%" height="90%" src={results.url} alt="" />
        )}

        {results.media_type === "video" && (
          <div>
            <ReactPlayer width="100%" height="80vh" url={results.url} />
          </div>
        )}
      </div>

      <div className="astro-explanation">
        <h2 className="astro-title">{results.title}</h2>
        <h4 className="astro-date">{results.date}</h4>
        <div>
          <span>{results.explanation}</span>
        </div>
      </div>
    </div>
  );
};

export default AstroPic;
