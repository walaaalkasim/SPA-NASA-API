import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import crater from "../../images/crater.gif";

import { useContext } from "react";
import MyContext from "../../context/MyContext";
import craterData from "../../datasource/craterdata.json";

const Craters = () => {
  const context = useContext(MyContext);
  const { craterPick } = context;
  console.log(craterData);
  const craters = new Icon({
    iconUrl: crater,
    iconSize: [25, 25],
  });

  return (
    <div>
      {craterPick &&
        craterData.map((item, index) => (
          <div key={index}>
            <div>
              <Marker
                className="marker"
                position={[item.Coordinates[0], item.Coordinates[1]]}
                icon={craters}
              >
                <Popup position={[item.Coordinates[0], item.Coordinates[1]]}>
                  <div className="popup">
                    {item.Name} {"   "}
                    {item.Location}
                  </div>
                  <button className="more-info-btn">
                    <a
                      href={`https://google.com/search?q=${item.Name} crater&${item.Location}`}
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
            )
          </div>
        ))}
    </div>
  );
};

export default Craters;
