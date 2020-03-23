import React from 'react';
import Lottie from 'react-lottie';
import animationData from './loading.json';
import { Row } from 'antd';

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Row style={{ height: '100vh' }} align="middle" justify="center">
        <Lottie options={defaultOptions} width={100} height={100} />
      </Row>
    </div>
  );
}
