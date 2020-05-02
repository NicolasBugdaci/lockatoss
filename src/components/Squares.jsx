import React, { Fragment } from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Squares = ({ searchId }) => {
  const allSquares = [
    ["a0", "a1", "a2", "a3", "a4", "a5"],
    ["b0", "b1", "b2", "b3", "b4", "b5"],
    ["c0", "c1", "c2", "c3", "c4", "c5"],
    ["d0", "d1", "d2", "d3", "d4", "d5"],
    ["e0", "e1", "e2", "e3", "e4", "e5"],
  ];

  return (
    <Fragment>
      <p className="position-text">
        <ArrowDownwardIcon /> Position de votre objet <ArrowDownwardIcon />
      </p>
      <div className="all-squares">
        {allSquares.map((squares, index) => {
          return (
            <div key={index} className="R-squares">
              {squares.map((square, index) => {
                return (
                  <div
                    key={index}
                    className={
                      square === searchId
                        ? "brillant"
                        : square.charAt(0).toUpperCase() + "Square"
                    }
                  >
                    {square.toUpperCase()}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Squares;
