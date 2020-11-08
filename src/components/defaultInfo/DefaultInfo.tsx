import { Col, Spin } from "antd";
import React from "react";

import './DefaultInfo.css'

/**
  Exibido enquanto não há dados para serem exibidos
 */
export const DefaultInfo = props => {
  const isLoading = props.isLoading;

  return isLoading ? <Spin size="large"/> : (
    <Col className='default-info'>
      Preencha os dados para mais detalhes.
    </Col>
  );
};

export default DefaultInfo;
