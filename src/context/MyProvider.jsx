import { useState } from "react";
import MyContext from "./MyContext";
import useFetch from "../hooks/useFetch";

const MyProvider = ({ children }) => {
  const USER = process.env.REACT_APP_USER;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  const [form, setForm] = useState({ user: "", password: "" });
  const [auth, setAuth] = useState(false);
  const handleFormInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    form.user === USER && form.password === PASSWORD
      ? setAuth(true)
      : setAuth(false);
    setForm({ user: "", password: "" });
  };
  const url = "https://eonet.gsfc.nasa.gov/api/v3/events";

  const [locationInfo, setLocationInfo] = useState({ id: "", title: "" });
  const [eventPopUp, setEventPopUp] = useState(null);
  const [videoLinkMedia, setVideoLinkMedia] = useState([]);
  const [firePick, setFirePick] = useState(false);
  const [font, setFont] = useState("1");
  const [snowPick, setSnowPick] = useState(false);
  const [stormPick, setStormPick] = useState(false);
  const [quakePick, setQuakePick] = useState(false);
  const [craterPick, setCraterPick] = useState(false);
  const [volcanoPick, setVolcanoPick] = useState(false);
  const [activeArticle, setActiveArticle] = useState(-1);
  // console.log(videolink);
  const initialState = { results: null, loading: true, error: null };
  const { results, loading, error } = useFetch(url, initialState);
  const [date, setDate] = useState("");
  // console.log(useFetch(`https://eonet.gsfc.nasa.gov/api/v3/events`));

  if (loading) return <p>loading ..</p>;
  if (error) return <p>{error}</p>;

  return (
    <MyContext.Provider
      value={{
        craterPick,
        setCraterPick,
        activeArticle,
        quakePick,
        setQuakePick,
        setActiveArticle,
        videoLinkMedia,
        setVideoLinkMedia,
        stormPick,
        font,
        setFont,
        date,
        setDate,
        setStormPick,
        snowPick,
        setSnowPick,
        volcanoPick,
        setVolcanoPick,
        setFirePick,
        firePick,
        eventPopUp,
        setEventPopUp,
        results,
        loading,
        error,
        handleFormSubmit,
        handleFormInput,
        auth,
        form,
        setLocationInfo,
        locationInfo,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
