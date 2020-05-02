import React, { useState } from "react";
import stockossFunction from "../StockossTest";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const Input = ({ setId }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // call "API"
    const response = stockossFunction(search);
    console.log(response);
    setId(response.position);
    if ("error_message" in response) alert(response.error_message);
    if ("position" in response) {
      if (response.position.length > 2) alert(response.position);
    }
  };

  return (
    <div className="form">
      <p className="five">Tapez les cinq caractères de votre ID:</p>
      <div className="form-group col-4">
        <label htmlFor="formGroupExampleInput"></label>

        <form className="sendID" onSubmit={handleSubmit}>
          <KeyboardArrowDownIcon />
          <input
            type="text"
            className="form-control"
            placeholder="ex: 12345"
            id="formGroupExampleInput"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <KeyboardArrowUpIcon />
          <div className="button">
            {" "}
            <button onSubmit={handleSubmit} className="btn btn-dark">
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
