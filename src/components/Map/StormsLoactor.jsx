import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import storm from "../../images/storm.gif";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

import convertDate from "../../helpers/convertDate";
const StormsLocator = () => {
  const context = useContext(MyContext);
  const { results, stormPick } = context;

  const stormgif = new Icon({
    iconUrl: storm,
    iconSize: [25, 25],
  });

  return (
    <div>
      {stormPick &&
        results.events.map((item, index) => (
          <div key={item.id}>
            {item.categories[0].id === "severeStorms" && (
              <div>
                {item.geometry.map((el) => (
                  <Marker
                    className="marker"
                    position={[el.coordinates[1], el.coordinates[0]]}
                    icon={stormgif}
                  >
                    <Popup
                      style={{ color: "red" }}
                      position={[el.coordinates[1], el.coordinates[0]]}
                    >
                      <div className="popup">
                        {item.title} {"   "}
                        {convertDate(el.date)}
                      </div>
                      <button className="more-info-btn">
                        <a
                          href={`https://google.com/search?q=${
                            item.title
                          }&  ${convertDate(item.geometry[0].date)}&tbm=nws`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          find out more
                        </a>
                      </button>
                    </Popup>{" "}
                  </Marker>
                ))}{" "}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default StormsLocator;
