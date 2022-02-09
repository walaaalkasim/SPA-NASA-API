import React from "react";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

const Categories = () => {
  const context = useContext(MyContext);
  const {
    craterPick,
    setCraterPick,
    quakePick,
    setQuakePick,
    snowPick,
    setSnowPick,
    setFirePick,
    firePick,
    volcanoPick,
    stormPick,
    setStormPick,
    setVolcanoPick,
  } = context;

  const fireHandler = () => {
    firePick === false ? setFirePick(true) : setFirePick(false);
  };

  const volcanoHandler = () => {
    volcanoPick === false ? setVolcanoPick(true) : setVolcanoPick(false);
  };
  const snowHandler = () => {
    snowPick === false ? setSnowPick(true) : setSnowPick(false);
  };
  const stormHandler = () => {
    stormPick === false ? setStormPick(true) : setStormPick(false);
  };
  const quakeHandler = () => {
    quakePick === false ? setQuakePick(true) : setQuakePick(false);
  };
  const craterHandler = () => {
    craterPick === false ? setCraterPick(true) : setCraterPick(false);
  };
  return (
    <div>
      <button className="fire-btn" onClick={() => fireHandler()}>
        Fire
      </button>
      <button className="volcano-btn" onClick={() => volcanoHandler()}>
        Volcano
      </button>
      <button className="snow-btn" onClick={() => snowHandler()}>
        Sea & Lake Ice
      </button>
      <button className="storm-btn" onClick={() => stormHandler()}>
        Storm
      </button>
      <button className="quake-btn" onClick={() => quakeHandler()}>
        Earthquakes
      </button>
      <button className="crater-btn" onClick={() => craterHandler()}>
        Craters
      </button>
    </div>
  );
};

export default Categories;
