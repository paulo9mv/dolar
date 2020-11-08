import { Col, Spin } from "antd";
import React, { FunctionComponent } from "react";

import './DefaultInfo.css'

interface IDefaultInfoProps {
  isLoading: boolean
}

/**
  Exibido enquanto não há dados para serem exibidos
 */
export const DefaultInfo: FunctionComponent<IDefaultInfoProps> = props => {
  const isLoading = props.isLoading;

  return isLoading ? <Spin size="large"/> : (
    <Col className='default-info'>
      Preencha os dados para mais detalhes.
    </Col>
  );
};

export default DefaultInfo;
