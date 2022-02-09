import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import earthq from "../../images/earthq.png";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import useFetch from "../../hooks/useFetch";
import convertDate from "../../helpers/convertDate";
import secondsToDate from "../../helpers/secondsToDate";
const Earthquakes = () => {
  const context = useContext(MyContext);
  const { quakePick } = context;
  const start = "2022-02-01";
  const end = "2022-02-02";
  const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${end}`;
  const initialState = { results: null, loading: true, error: null };
  const { results, loading, error } = useFetch(url, initialState);
  console.log(results);
  const quake = new Icon({
    iconUrl: earthq,
    iconSize: [25, 25],
  });
  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      {quakePick &&
        results.features.map((item) => (
          <div key={item.id}>
            <div>
              <Marker
                className="marker"
                key={item.id}
                position={[
                  item.geometry.coordinates[1],
                  item.geometry.coordinates[0],
                ]}
                icon={quake}
              >
                <Popup
                  position={[
                    item.geometry.coordinates[1],
                    item.geometry.coordinates[0],
                  ]}
                >
                  <div className="popup">
                    {item.properties.place} {"   "}
                    {secondsToDate(item.properties.time)}
                    {"    "}
                    between {start} and {end}
                  </div>
                </Popup>{" "}
              </Marker>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Earthquakes;
