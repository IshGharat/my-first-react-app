import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import the CSS file for styling

function Registry() {
  const [registryData, setRegistryData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState(false);

  const addItem = (e) => {
    e.preventDefault();
    if (error) return;
    const tempData = [...registryData];
    tempData.push(textInput);
    setRegistryData(tempData);
    setTextInput("");
  };

  useEffect(() => {
    setError(textInput.length > 10);
  }, [textInput]);

  const removeItem = (index) => {
    const newData = [...registryData];
    newData.splice(index, 1);
    setRegistryData(newData);
  };

  const editItem = (index) => {
    const newData = [...registryData];
    newData[index] = textInput;
    setRegistryData(newData);
  };

  return (
    <div className="registry-container">
      <h1>Registry</h1>
      <div className="container1">
      <Link to="/">Click here to go to home</Link>
      </div>
      

      <form onSubmit={addItem}>
        <label>
          Text input:
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {error && <span className="error">Error occurred</span>}
      <ul className="registry-list">
        {registryData.map((item, index) => (
          <li key={index} className="registry-item">
            <span>{item}</span>
            <div>
              <button onClick={() => removeItem(index)}>Remove</button>
              <button onClick={() => editItem(index)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Registry;
