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

  const getBootstrapColorClass = (c) => {
    switch (c) {
      case "red":
        return "bg-danger";
      case "yellow":
        return "bg-warning";
      case "green":
        return "bg-success";
      case "purple":
        return "bg-purple"; // custom color, ver más abajo
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="bg-dark p-4 rounded d-flex flex-column align-items-center gap-3" style={{ width: "100px", margin: "50px auto" }}>
      {colors.map((c) => (
        <div
          key={c}
          onClick={() => setColor(c)}
          className={`rounded-circle ${getBootstrapColorClass(c)}`}
          style={{
            width: "60px",
            height: "60px",
            opacity: color === c ? 1 : 0.3,
            boxShadow: color === c ? "0 0 20px 5px white" : "none",
            cursor: "pointer",
            transition: "opacity 0.3s, box-shadow 0.3s"
          }}
        />
      ))}
      <button className="btn btn-secondary btn-sm mt-2" onClick={toggleColor}>Cambiar color</button>
      <button className="btn btn-secondary btn-sm mt-1" onClick={addPurple}>Añadir púrpura</button>
    </div>
  );
};

export default TrafficLight;
