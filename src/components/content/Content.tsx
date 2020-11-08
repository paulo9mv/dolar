import { Row, Spin } from "antd";
import React from "react";

import './Content.css'

const Content = props => {
    const data = props.data
    const isLoading = props.isLoading

    return isLoading ? <Spin size="large"/> : (
        <div className='content'>
            <Row justify='center'>IOF: {data.iof * 100}%</Row>
            <Row justify='center'>Dólar sem imposto: U${data.dolarSemImposto.toFixed(2)}</Row>
            <Row justify='center'>Dolar com imposto: U${data.dolarComImposto.toFixed(2)}</Row>
            <Row justify='center'>Real sem imposto: R${data.realSemImposto.toFixed(2)}</Row>
            <Row justify='center'>Real com imposto: R${data.realComImposto.toFixed(2)}</Row>
        </div>
    );
};

export default Content;

