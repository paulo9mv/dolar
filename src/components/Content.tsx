import { Row, Spin } from "antd";
import React from "react";

const Content = props => {

    const data = props.data
    const isWaiting = props.isWaiting

    return isWaiting ? <Spin/> : (
        <div>
        <Row>IOF: {data.iof * 100}%</Row>
        <Row>Dólar sem imposto: {data.dolarSemImposto.toFixed(2)}</Row>
        <Row>Dolar com imposto: {data.dolarComImposto.toFixed(2)}</Row>
        <Row>Real sem imposto: {data.realSemImposto.toFixed(2)}</Row>
        <Row>Real com imposto: {data.realComImposto.toFixed(2)}</Row>
        </div>
    );
};

export default Content;

