import React from "react";
import { nesto } from "./Services/Services";

export const Header = () => {
  return (
    <header className="p-5">
      <nav className="navbar bg-light fixed-top">
        <div className="w-90 container-fluid">
          <h1 className="ntext-dark">
            Interviews Report
          </h1>
          <button  type="button" class="btn btn-light btn-outline-secondary">
              Candidates
          </button>
        </div>
      </nav>
    </header>
  );
};



nesto()
