import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  const [query, setQuery] = useState("");
  const [synonyms, setSynonems] = useState([]);
  const url = `https://similarwords.p.rapidapi.com/moar?query=${query}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1ea5c409e7msh54cf3128166d54ep18435ajsn56a2f052c5af",
      "X-RapidAPI-Host": "similarwords.p.rapidapi.com",
    },
  };
  const fetchingData = async (event) => {
    const responce = await fetch(url, options);
    const result = await responce.json();
    return result;
  };

  const showData = async () => {
    const data = await fetchingData();
    setSynonems("");
    if (data === null) {
      setSynonems("Spelling Error or word nor found");
    } else {
      setSynonems(data.result);
    }

    // console.log(data.result["0"]);
    // console.log(Synonems);
  };
  React.useEffect(() => {
    fetchingData();
  }, []);
  return (
    <>
      <div className="TopSection">
        <h2>Find Synonyms</h2>
        <label htmlFor="inputQuery">Search here</label>
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          type="text"
          id="inputQuery"
          placeholder="Beautiful.."
        />
        <br />
        <button onClick={showData} type="submit">
          Search
        </button>
        <hr />
      </div>
      <div className="MainBody">
        <div>
          <h2>Words</h2>
          <hr />
          <h3>Synonyms</h3>
          <hr />
          {synonyms.length != 0 ? (
            synonyms.map((element, index) => (
              <p key={index} value={element}>
                {index +
                  1 +
                  ". " +
                  element.charAt(0).toUpperCase() +
                  element.slice(1)}
              </p>
            ))
          ) : (
            <p>No synonyms found / try changing Words or Spelling</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
