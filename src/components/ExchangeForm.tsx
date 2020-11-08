import { Button, Form, Input, Radio } from 'antd'
import { Formik } from 'formik'
import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { calculateExchange } from '../store/reducer'
import { InfoCircleOutlined } from '@ant-design/icons';

import './ExchangeForm.css'
export interface IExchangeFormData {
  dolar?: number
  taxa?: number
  iof?: boolean
}

export const ExchangeForm: FunctionComponent = () => {

  const dispatch = useDispatch();

  async function onSubmit(values: IExchangeFormData) {
    dispatch(calculateExchange(values))
  }

  const exchangeFormValidator = yup.object().shape({
    dolar: yup.number()
      .typeError('Por favor, informe um valor')
      .positive('Por favor, informe um valor positivo')
      .required('Por favor, informe o valor do produto'),
    taxa: yup.number()
      .typeError('Por favor, informe uma taxa')
      .positive('Por favor, informe uma taxa positiva')
      .required('Por favor, informe o valor da taxa'),
  })

  return (
    <Formik<IExchangeFormData>
      enableReinitialize
      initialValues={{
        dolar: undefined,
        taxa: undefined,
        iof: false
      }}
      onSubmit={onSubmit}
      validationSchema={exchangeFormValidator}
    >{({values, setFieldValue, errors, touched, handleSubmit}) => {
        return (
          <Form
            layout='vertical'
            onFinish={handleSubmit}
          >
            <Form.Item label='Valor do produto'
            required
            validateStatus={
              errors.dolar && touched.dolar ? 'error' : undefined
            }
            className='teste'
            help={touched.dolar && errors.dolar}>
              <Input
                addonBefore="U$"
                placeholder='Em dólares'
                value={values.dolar} 
                onChange={value => setFieldValue('dolar', value.target.value)}
              />
            </Form.Item>
            <Form.Item label='Taxa do estado americano'
            required
            validateStatus={
              errors.taxa && touched.taxa ? 'error' : undefined
            }
            help={touched.taxa && errors.taxa}>
              <Input
                addonAfter="%"
                placeholder='Taxa do produto'
                value={values.taxa}
                onChange={value => setFieldValue('taxa', value.target.value)}
              />
            </Form.Item>
            <Form.Item
              label='Forma de pagamento'
              tooltip={{ title: 'Cartão: 6,4% IOF. Dinheiro: 1,1% IOF.', icon: <InfoCircleOutlined /> }}>
              <Radio.Group
                onChange={e => setFieldValue('iof', e.target.value)}
                value={values.iof}
              >
                <Radio value={false}>Cartão</Radio>
                <Radio value={true}>Dinheiro</Radio>
              </Radio.Group>
            </Form.Item>
            <Button
              htmlType='submit'
              type='primary'
            >
              Calcular
            </Button>
          </Form>
        )
        
      }}
    </Formik>
  )
}