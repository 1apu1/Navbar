import React, { useState } from "react";
// import Array from "./Array";
function Sliderr() {
  const [currentIdx, setcurrentIdx] = useState(0);

  const Next = () => {
    if (currentIdx < Array.length - 1) {
      setcurrentIdx(currentIdx + 1);
    } else {
      setcurrentIdx(0);
    }
  };

  const prev = () => {
    if (currentIdx === 0) {
      setcurrentIdx(Array.length - 1);
    } else {
      setcurrentIdx(currentIdx - 1);
    }
  };                               

  return (
    <center>
      <div>
        <h1>Slider</h1>
        <div
          className="border border-2 border-danger"
          style={{ width: "450px", height: "250px" }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={Array[currentIdx]}
            alt="slider"
          />
        </div>

        <div className="my-3">
          {Array.map((e, i) => (
            <img
              key={i}
              className={"m-2 border border-2 border-danger"}
              style={{ width: "50px", height: "50px" }}
              src={e}
              alt={"Thumnail ${i}"}
              onClick={() => setcurrentIdx(i)}
            />
          ))}
        </div>
        <button className="btn btn-outline-primary btn-lg m-3" onClick={prev}>
          Left
        </button>
        <button className="btn btn-outline-primary btn-lg" onClick={Next}>
          Right
        </button>
      </div>
      {Array.map((e, i) => {
        return (
          <button
            key={i}
            className={`btn btn-sm btn-outline-secondary m-2  border border-danger${
              i === currentIdx ? "active" : ""
            }`}
            onClick={() => setcurrentIdx(i)}
          >
            {i + 1}
          </button>
        );
      })}
    </center>
  );
}

export default Sliderr;
