import React, { useState } from "react";
import Buttons from "./Buttons";
import axios from "axios";

const FormOne = ({ children }) => {
  let [formOneData, updateData] = useState({
    email: "",
    name: "",
    phone: "",
  });
  let handleInput = (e) => {
    e.preventDefault();

    updateData({
      ...formOneData,
      [e.target.id]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/insertUserInfo", formOneData)
      .then((response) => {
        console.log("User created:", response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          console.log("Response headers:", error.response.headers);
        } else if (error.request) {
          console.log("Request data:", error.request);
        } else {
          console.log("Error message:", error.message);
        }
        console.log("Error config:", error.config);
      });
  };
  return (
    <>
      <form action="form2" method="get" onSubmit={handleSubmit}>
        <div className="form-container">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>{" "}
          <br />
          <br />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formOneData.name}
            onChange={handleInput}
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formOneData.email}
            required
            onChange={handleInput}
          />
          <br />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            required
            value={formOneData.phone}
            onChange={handleInput}
          />
          <br />
        </div>
        <Buttons />
      </form>
    </>
  );
};

export default FormOne;
