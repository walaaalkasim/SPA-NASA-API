import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";
import { useContext } from "react";

import MyContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

const alanKey =
  "2eb4c6ab2ee045cf0fc32c02bdd14ed52e956eca572e1d8b807a3e2338fdd0dc/stage";
const Alan = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { handlePrevDay } = context;
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, collection }) => {
        if (command === "collection") {
          console.log(collection);
        } else if (command === "astronomy") {
          navigate("/astroPic");
        } else if (command === "prevpage") {
          handlePrevDay();
        }
      },
    });
  }, []);
  return <div></div>;
};

export default Alan;
