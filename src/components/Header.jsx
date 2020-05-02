import React from "react";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

const Header = () => {
  return (
    <header>
      <h1>
        Lockatoss
        <span className="logo">
          <LocationSearchingIcon style={{ fontSize: 30 }} />
        </span>
      </h1>
    </header>
  );
};

export default Header;
