import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const toggleColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  const containerStyle = {
    backgroundColor: "#222",
    padding: "20px",
    width: "100px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    margin: "50px auto"
  };

  const lightStyle = (lightColor) => ({
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: lightColor,
    opacity: color === lightColor ? 1 : 0.3,
    boxShadow: color === lightColor ? "0 0 20px 5px white" : "none",
    cursor: "pointer",
    transition: "opacity 0.3s, box-shadow 0.3s"
  });

  const buttonStyle = {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#444",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      {colors.map((c) => (
        <div key={c} style={lightStyle(c)} onClick={() => setColor(c)}></div>
      ))}
      <button style={buttonStyle} onClick={toggleColor}>Cambiar color</button>
      <button style={buttonStyle} onClick={addPurple}>Añadir púrpura</button>
    </div>
  );
};

export default TrafficLight;
