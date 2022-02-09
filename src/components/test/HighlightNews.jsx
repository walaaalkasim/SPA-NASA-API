import React from "react";
import { useEffect, useState, createRef } from "react";
import { useContext } from "react";
import useStyles from "./styles";
import MyContext from "../../context/MyContext";

const HighlightNews = ({ i, article }) => {
  const classes = useStyles();

  const context = useContext(MyContext);
  const { activeArticle } = context;
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 300);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(100)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  return (
    <div
      ref={elRefs[i]}
      className={activeArticle === i ? classes.activeCard : classes.card}
    >
      {article}
    </div>
  );
};

export default HighlightNews;
