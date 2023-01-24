import React from "react";
import "../styles/second.css"
const Second = () => {
    // const info=JSON.parse(localStorage.getItem("u")).filter((item)=>item.city===city);
    // localStorage.setItem("info",JSON.stringify(info))
  return (
    <>
     
      <div className="inputs-wrapper">
      <select class="form-select" aria-label="Default select example">
        <option selected>Categories</option>
        <option value="1">Action</option>
        <option value="2">Romantic</option>
        <option value="3">Thriller</option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <option selected>Sort by year</option>
        <option value="1">2022</option>
        <option value="2">2021</option>
        <option value="3">2020</option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <option selected>Sort by hours</option>
        <option value="1">one</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <option selected>Sort by Rates</option>
        <option value="1">9+</option>
        <option value="2">8+</option>
        <option value="3">7+</option>
        <option value="3">6+</option>
        <option value="3">5+</option>
      </select>
      </div>
    </>
  );
};

export default Second;
