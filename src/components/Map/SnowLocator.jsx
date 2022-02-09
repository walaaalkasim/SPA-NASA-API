import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import snow from "../../images/snow.gif";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

import convertDate from "../../helpers/convertDate";
const SnowLocator = () => {
  const context = useContext(MyContext);
  const { results, snowPick } = context;

  const ice = new Icon({
    iconUrl: snow,
    iconSize: [25, 25],
  });

  return (
    <div>
      {snowPick &&
        results.events.map((item) => (
          <div key={item.id}>
            {item.categories[0].id === "seaLakeIce" && (
              <div>
                <Marker
                  className="marker"
                  key={item.id}
                  position={[
                    item.geometry[0].coordinates[1],
                    item.geometry[0].coordinates[0],
                  ]}
                  icon={ice}
                >
                  <Popup
                    position={[
                      item.geometry[0].coordinates[1],
                      item.geometry[0].coordinates[0],
                    ]}
                  >
                    <div className="popup">
                      {item.title} {"   "}
                      {convertDate(item.geometry[0].date)}
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
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default SnowLocator;
