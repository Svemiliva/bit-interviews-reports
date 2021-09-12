import React from "react";
import { nesto } from "./services/Services";

export const Header = () => {
  return (
    <header>
      <nav className="navbar bg-light fixed-top">
        <div className="w-90 container-fluid">
          <h1 className="navbar-brand text-dark">
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
