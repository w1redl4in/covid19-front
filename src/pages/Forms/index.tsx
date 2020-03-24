import { Form, Button, Input, Row, Col } from 'antd';

import React from 'react';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const Forms = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row align="middle" justify="center" style={{ height: '100vh' }}>
      <Col span={8}>
        <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
          <Form.Item
            name="country"
            label="País"
            hasFeedback
            rules={[{ required: true, message: 'Please select your country!' }]}
          >
            <Input name="country" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Forms;
