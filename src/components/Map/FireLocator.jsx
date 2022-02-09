import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import giphy from "../../images/giphy.gif";

import { useContext } from "react";
import MyContext from "../../context/MyContext";

import convertDate from "../../helpers/convertDate";
const FireLocator = () => {
  const context = useContext(MyContext);
  const { results, firePick } = context;

  const fire = new Icon({
    iconUrl: giphy,
    iconSize: [25, 25],
  });

  return (
    <div>
      {firePick &&
        results.events.map((item, index) => (
          <div key={item.id}>
            {item.categories[0].id === "wildfires" && (
              <div>
                <Marker
                  className="marker"
                  position={[
                    item.geometry[0].coordinates[1],
                    item.geometry[0].coordinates[0],
                  ]}
                  icon={fire}
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

export default FireLocator;
