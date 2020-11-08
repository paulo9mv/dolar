import React, { FunctionComponent } from "react";

import './TopBar.css'

const TopBar: FunctionComponent = () => {
  return (
    <div className='topbar'>
      <span>{`💱`}</span>
      Dólar - Real<span>{`💲`}</span>
    </div>
  );
};

export default TopBar;
