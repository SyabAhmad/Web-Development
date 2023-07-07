import "./MainTempAndTime.css";
import "./WeekInfo.jsx";
const MainTempAndTime = (props) => {
  if (!props.data || !props.data.current) {
    // Check if the necessary data is available before accessing it
    return null;
  }
  const date = new Date();
  const hour = date.getHours();
  const minut = date.getMinutes();
  return (
    <>
      <div className="TempAndTimeSection">
        <div className="TempAndTime">
          <h2>{props.data.current.temp_f}</h2>
          <h4>{hour + " : " + minut}</h4>
        </div>
        <div className="TempInCAndF"></div>
      </div>
    </>
  );
};
export default MainTempAndTime;
