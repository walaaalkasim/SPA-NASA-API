import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import volcano from "../../images/volcano.gif";

import { useContext } from "react";
import MyContext from "../../context/MyContext";

import convertDate from "../../helpers/convertDate";

const VolcanoLocator = () => {
  const context = useContext(MyContext);
  const { results, volcanoPick } = context;

  const volcanopic = new Icon({
    iconUrl: volcano,
    iconSize: [25, 25],
  });
  return (
    <div>
      {volcanoPick &&
        results.events.map(
          (item, index) =>
            item.categories[0].id === "volcanoes" && (
              <Marker
                key={item.id}
                position={[
                  item.geometry[0].coordinates[1],
                  item.geometry[0].coordinates[0],
                ]}
                icon={volcanopic}
              >
                {" "}
                <Popup
                  position={[
                    item.geometry[0].coordinates[1],
                    item.geometry[0].coordinates[0],
                  ]}
                >
                  <div className="popup">
                    {item.title} {convertDate(item.geometry[0].date)}
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
            )
        )}
    </div>
  );
};

export default VolcanoLocator;
