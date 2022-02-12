import React from "react";

import useFetch from "../../hooks/useFetch";

import Video from "./Video";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import HighlightNews from "./HighlightNews";

const TestApi = () => {
  const context = useContext(MyContext);
  const { font } = context;
  const url = `https://images-api.nasa.gov/search?q=moon&media_type=video&page=1`;
  const initialState = { results: null, loading: true, error: null };
  const { results, loading, error } = useFetch(url, initialState);
  console.log(results);
  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="nasa-media-container">
      {results.collection.items.map((item, i) => (
        <div key={item.data[0].nasa_id} className="nasa-media-content">
          <Video link={item.href} img={item.links[0].href} i={i} />
          <div className="description">
            <p className="par-des" style={{ fontSize: `${font}rem` }}>
              {" "}
              <HighlightNews i={i} article={item.data[0].description} />
            </p>{" "}
            <p className="nasa-media-index">{i + 1}</p>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default TestApi;
