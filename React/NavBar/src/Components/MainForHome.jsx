import "./MainForHome.css";
import profile from "..//assets/Profile.jpg";
import { useState } from "react";
import React from "react";
const MainForHome = () => {
  const [text, setText] = useState("");
  const changingText = () => {
    setTimeout(() => {
      setText("Web Developer");

      setTimeout(() => {
        setText("Web Disginer");

        setTimeout(() => {
          setText("Software Eningeer");
        }, 2000);
      }, 2000);
    }, 2000);
  };

  React.useEffect(() => {
    changingText();
  }, []);

  return (
    <>
      <main>
        <div className="information">
          <h2>Hello I'm Syed Syab</h2>
          <h4>
            A <span>{text}</span>
          </h4>
        </div>
        <div className="pic">
          <img src={profile} alt="Profile Image" />
        </div>
      </main>
    </>
  );
};

export default MainForHome;
