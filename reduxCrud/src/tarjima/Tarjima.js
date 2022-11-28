import React, { useState } from "react";
const Tarjima = () => {
  const [til, setTil] = useState("uzb");
  const [key, setKey] = useState({
    uzb: {
      name: "nomi",
      rang: "rang",
    },
    ru: {
      name: "имя",
      rang: "светы",
    },
    eng: {
      name: "name",
      rang: "color",
    },
  });
  const [data, setData] = useState({
    uzb: [
      { id: 1, name: "avtomobil", rang: "qora" },
      { id: 2, name: "mobil aloqa", rang: "qizil" },
      { id: 3, name: "suv", rang: "rangi yo'q" },
    ],
    ru: [
      { id: 1, name: "машина", rang: "чорниы" },
      { id: 2, name: "тел", rang: "красни" },
      { id: 3, name: "вода", rang: "нет светы" },
    ],
    eng: [
      { id: 1, name: "car", rang: "black" },
      { id: 2, name: "phone", rang: "red" },
      { id: 3, name: "water", rang: "no color" },
    ],
  });
  let tilSelect = (e) => {
    setTil(e.target.value);
  };
  return (
    <div>
      <select onChange={(e) => tilSelect(e)}>
        <option value="uzb">uzb</option>
        <option value="ru">ru</option>
        <option value="eng">eng</option>
      </select>
      {data[til].map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid red", padding: "5px", margin: "5px" }}
        >
          <h1>
            {key[til].name}: {item.name}
          </h1>
          <h1>
            {key[til].rang}: {item.rang}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Tarjima;
