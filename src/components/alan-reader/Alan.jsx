import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import MyContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
import wordsToNumbers from "words-to-numbers";
import useFetch from "../../hooks/useFetch";
import { CircularProgress } from "@material-ui/core";

const alanKey =
  "2eb4c6ab2ee045cf0fc32c02bdd14ed52e956eca572e1d8b807a3e2338fdd0dc/stage";

const Alan = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  const { videoLinkMedia, setFont, activeArticle, setActiveArticle } = context;
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, number, collection }) => {
        if (command === "astronomy") {
          navigate("/astroPic");
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "small") {
          setFont("1");
        } else if (command === "medium") {
          setFont("1.5");
        } else if (command === "larg") {
          setFont("2");
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;

          const article = videoLinkMedia[parsedNumber - 1];
          console.log(number);
          console.log(article);

          window.open(article, "_blank");
        }
      },
    });
  }, [videoLinkMedia]);

  return <div></div>;
};

export default Alan;
