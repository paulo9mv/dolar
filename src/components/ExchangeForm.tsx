import { Button, Form, Input, Radio } from 'antd'
import { Formik } from 'formik'
import React, { FunctionComponent } from 'react'
import * as yup from 'yup'

interface IExchangeFormData {
  dolar?: number
  taxa?: number
  iof?: boolean
}

export const ExchangeForm: FunctionComponent = () => {

  async function onSubmit(values: IExchangeFormData) {
    console.log(values)
  }

  yup.setLocale({
    mixed: {
      default: 'Não é válido',
    },
    number: {
      min: 'Deve ser maior que ${min}',
    },
  });

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
      console.log(values, errors, touched)
        return (
          <Form
            layout='vertical'
            onFinish={handleSubmit}
          >
            <Form.Item label='Dólar'
            required
            validateStatus={
              errors.dolar && touched.dolar ? 'error' : undefined
            }
            help={touched.dolar && errors.dolar}>
              <Input
                addonBefore="U$"
                placeholder='Valor do produto em dólares'
                value={values.dolar} 
                onChange={value => setFieldValue('dolar', value.target.value)}
              />
            </Form.Item>
            <Form.Item label='Taxa do estado'
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
            <Form.Item label='Forma de pagamento'>
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