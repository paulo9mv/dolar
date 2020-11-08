import React, { FunctionComponent } from "react";

import errorImage from '../../assets/svg/robot_error.svg'; // Tell webpack this JS file uses this image

import 'antd/dist/antd.css';
import './Error.css'

/**
 * Exibido em caso de erro
 */
export const Error: FunctionComponent = () => {
  return (
    <div className='error'>
      <img src={errorImage} alt="Logo"/>
      Ocorreu um erro. Tente novamente mais tarde.
    </div>
  );
}
