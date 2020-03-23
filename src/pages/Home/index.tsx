import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/covid.json';
import { Row, Typography, Col } from 'antd';
import { Link } from 'react-router-dom';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Row align="middle" justify="center">
      <Link to="/covid">
        <button style={{ backgroundColor: 'transparent', border: '0' }}>
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled
            width={700}
            height={700}
            speed={20}
            title="Covid-19"
          />
          <Typography.Title>Covid-19</Typography.Title>
        </button>
      </Link>
    </Row>
  );
}
