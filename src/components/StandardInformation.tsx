import { Col, Spin } from "antd";
import React from "react";

import 'antd/dist/antd.css';

const StandardInformation = (props) => {
  const isWaiting = props.isWaiting;

  return isWaiting ? <Spin size="large"/> : (
    <Col>
      Preencha os dados para mais detalhes.
    </Col>
  );
};

export default StandardInformation;
