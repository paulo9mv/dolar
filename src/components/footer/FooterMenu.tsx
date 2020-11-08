import React, { FunctionComponent } from "react";

import './FooterMenu.css'

const FooterMenu: FunctionComponent = () => {
  return (
    <footer>
      <div className={'footer-center'}>
        <span className='about'>{`💻`} Made by Paulo Viana</span>
      </div>
    </footer>
  );
};

export default FooterMenu;
