import { useState } from "react";
import "./DataEntry.css";
const DataEntry = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [cardDetails, setCardDetails] = useState([]);
  const handleInput = (event) => {
    if (event.target.name === "itemName" && event.target.name != "") {
      setItemName(event.target.value);
    } else if (event.target.name === "itemPrice" && event.target.name != "") {
      setItemPrice(event.target.value);
    }
  };

  const handleButtonClick = () => {
    const newCard = {
      itemName: itemName,
      itemPrice: itemPrice,
      date: displayData(),
    };
    setCardDetails([...cardDetails, newCard]);

    setItemName("");
    setItemPrice("");
  };

  const date = new Date();
  const displayData = () => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const milliseconds = date.getMilliseconds();
    const seconds = date.getSeconds();
    const minuts = date.getMinutes();
    const hours = date.getHours();

    const Ddata = `${day} / ${month} / ${year} ${hours} : ${minuts} : ${seconds} :${milliseconds}`;
    return Ddata;
  };

  return (
    <>
      <div className="entrySection">
        <div className="textToShow">
          <h2>Data Enter Here</h2>
        </div>
        <div className="inputText">
          <input
            placeholder="Item Name"
            type="text"
            name="itemName"
            id="itemName"
            value={itemName}
            onChange={handleInput}
          />
          <input
            placeholder="Item Price"
            type="text"
            name="itemPrice"
            id="itemPrice"
            value={itemPrice}
            onChange={handleInput}
          />
        </div>
        <div>
          <button type="button" onClick={handleButtonClick}>
            Add Now
          </button>
        </div>
      </div>
      {/* Showcasing Data */}

      <section>
        {cardDetails.map((card, index) => {
          return (
            <div className="card" key={index}>
              <h2>{card.itemName}</h2>
              <h3>Rs: {card.itemPrice}</h3>
              <p>{card.date}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default DataEntry;
