import "./WeatherInformation.css";
import "./WeekInfo";
const WeatherInformation = (props) => {
  if (!props.data || !props.data.current) {
    // Check if the necessary data is available before accessing it
    return null;
  }
  return (
    <>
      <div className="information">
        <p>Humidity: {props.data.humidity}</p>
        <p>pressure_in: {props.data.pressure_in}</p>
        <p>wind_kph: {props.data.wind_kph}</p>
      </div>
    </>
  );
};
export default WeatherInformation;
