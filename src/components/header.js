import React from "react";
import Logo from "../images/pear.png";

export default () => (
  <div className="is-white-bg margin-5">
    <div className="row flex padding-0-tb container-small">
      <div className="col-xs-9 flex">
        <img src={Logo} alt="pear" className="logo" />
      </div>
    </div>
  </div>
);
