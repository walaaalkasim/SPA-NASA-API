import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const MarsRoverPhotos = () => {
  const KEY = process.env.REACT_APP_API_KEY;
  const [page, setPage] = useState(1);
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?sol=1000&api_key=${KEY}&page=${page}`;
  const initialState = { results: null, loading: true, error: null };
  const { results, loading, error } = useFetch(url, initialState);
  console.log(results);

  const handlePage = () => {
    window.scrollTo(0, 0);
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    window.scrollTo(0, 0);
    setPage((prevPage) => prevPage - 1);
  };
  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <div className="rover-compo-container">
        {results.photos.map((item) => (
          <div key={item.id}>
            <div>
              <div className="rover-container">
                {" "}
                <p>click to see full size</p>
                <a href={item.img_src} target="_blank" rel="noreferrer">
                  {" "}
                  <img src={item.img_src} alt="" className="rover-img" />{" "}
                </a>
                <div> {item.earth_date} </div>{" "}
                <div> {item.camera.full_name}</div>
                <div>launch_date :{item.rover.launch_date}</div>
                <div>landing_date :{item.rover.landing_date}</div>
              </div>
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      <div className="btn-bar-down">
        {" "}
        <button onClick={() => handlePage()}>previous page</button>
        <button onClick={() => handlePrevPage()}>next page</button>
      </div>
    </div>
  );
};

export default MarsRoverPhotos;
