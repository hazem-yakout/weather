import React from "react";
import "../index.css";
const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city..." />
      <input type="text" name="country" placeholder="country..." />
      <button> Get Weather </button>{" "}
    </form>
  );
};
export default Form;
