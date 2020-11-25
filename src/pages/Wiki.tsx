import React from "react";
import "../styles/pages/Wiki.css";

function Wiki() {
  return (
    <div id="page-wiki">
      <div className="content-wrapper">
        <div className="molecule-description-wrapper">
          <img src="" alt="molecule img" />

          <div id="molecule-name">
            <strong>molecule name</strong>
          </div>

          <div id="molecule-description">
            Lorem ipsum dolor asdf sit amet consectetur adipisicing elit.
            Architecto reiciendis nemo officiis voluptate modi fugit, odio
            ratione ipsum molestias eveniet tenetur sit laborum, quos dolore
            velit vero sequi voluptates optio!
          </div>
        </div>

        <div id="display-molecule">check</div>

        <div id="footer">
          <p>BIOQuery</p>
        </div>
      </div>
    </div>
  );
}

export default Wiki;
