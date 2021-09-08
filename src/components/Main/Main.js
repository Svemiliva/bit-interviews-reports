import React from "react";
import './Main.css'

export const Main = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card-box text-center">
            <div class="user-pic">
              <figure>
                <img
                  src="http://www.webcoderskull.com/img/team4.png"
                  class="img-responsive"
                  alt="candidate pic"
                ></img>
              </figure>
            </div>
            <h6>email@gmail.com</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
