import React, { useEffect, useState } from "react";
import "./WeekInfo.css";
import MainTempAndTime from "./MainTempAndTime";
import WeatherInformation from "./WeatherInformation";
const WeekInfo = () => {
  const apiKey = "52fe7114d20c43ab8be120524232506";
  const selectedCountry = "karachi";
  const [ddata, setData] = useState(null);
  const fitchingInformation = async (apiKey, selectedCountry) => {
    const Responce = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCountry}`
    );
    const result = await Responce.json();
    console.log(result);
    setData(result);
  };

  React.useEffect(() => {
    fitchingInformation(apiKey, selectedCountry);
  }, []);

  return (
    <>
      {ddata && <MainTempAndTime data={ddata} />}
      {ddata && <WeatherInformation data={ddata} />}
      <div className="cardaSection">
        <div className="card">
          <h2>{ddata && ddata.current.temp_c}</h2>
          <h4>{ddata && ddata.current.temp_c}</h4>
          <h4>{ddata && ddata.current.temp_f}</h4>
        </div>
        <div className="card">
          <h2>{ddata && ddata.current.temp_c}</h2>
          <h4>{ddata && ddata.current.temp_c}</h4>
          <h4>{ddata && ddata.current.temp_f}</h4>
        </div>
        <div className="card">
          <h2>{ddata && ddata.current.temp_c}</h2>
          <h4>{ddata && ddata.current.temp_c}</h4>
          <h4>{ddata && ddata.current.temp_f}</h4>
        </div>
      </div>
    </>
  );
};
export default WeekInfo;
