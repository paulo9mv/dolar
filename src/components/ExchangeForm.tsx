import { Form, Input } from 'antd'
import { Field, Formik } from 'formik'
import React, { FunctionComponent } from 'react'
import * as yup from 'yup'

interface IExchangeFormData {
  dolar?: number
  taxa?: number
  iof?: number
}

export const ExchangeForm: FunctionComponent = () => {

  async function onSubmit(values: IExchangeFormData) {

  }

  const exchangeFormValidator = yup.object().shape({
    dolar: yup.number().required().positive(),
    taxa: yup.number().required().positive(),
  })

  return (
    <Formik<IExchangeFormData>
      enableReinitialize
      initialValues={{
        dolar: NaN,
        taxa: NaN,
        iof: 1.1
      }}
      onSubmit={values => {
        console.log(values)
      }}
      validationSchema={exchangeFormValidator}
    >{({values, errors, touched}) => {
      console.log(values)
        return (
          <Form>
            <Form.Item label='Dólar'>
              <Input />
              
            </Form.Item>
          </Form>
        )
        
      }}
    </Formik>
  )
}