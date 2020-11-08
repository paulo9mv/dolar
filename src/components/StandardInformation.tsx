import { Row, Spin } from "antd";
import React from "react";

const StandardInformation = (props) => {
  const isWaiting = props.isWaiting;

  return isWaiting ? (
    <Spin />
  ) : (
    <div>Preencha os dados acima para visualizar mais detalhes.</div>
  );
};

export default StandardInformation;
