import React from "react";
import "./Search.css"

export const Search = () => {
  return (
    <search className="mt-5">
      <nav className="navbar">
        <div className="w-90 container-fluid">
          <h1 className="navbar-brand text-dark">Candidates</h1>
          <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search"></input>
  </div>
        </div>
      </nav>
      <hr></hr>
    </search>
  );
};
