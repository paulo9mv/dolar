import { Row, Spin } from "antd";
import React, { FunctionComponent } from "react";

import './Content.css'

interface IContentProps {
    isLoading: boolean
    data: any
}

/**
 * Exibido caso haja dados para serem exibidos
 */
const Content: FunctionComponent<IContentProps> = props => {
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

