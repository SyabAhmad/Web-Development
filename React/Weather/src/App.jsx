import MainTempAndTime from "./components/MainTempAndTime.jsx";
import WeatherInformation from "./components/WeatherInformation.jsx";
import WeekInfo from "./components/WeekInfo.jsx";
import "./App.css";
function App() {
  return (
    <>
      <div className="componentsSection">
        <div className="UpperComponents">
          <MainTempAndTime />
          <WeatherInformation />
        </div>
        <div className="LowerComponents">
          <WeekInfo />
        </div>
      </div>
    </>
  );
}

export default App;
