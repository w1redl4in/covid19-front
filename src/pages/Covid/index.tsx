import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Card } from 'antd';
import {
  UserDeleteOutlined,
  UserAddOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import Header from '../../components/Header';
import API from 'axios';

export default function Covid() {
  type ICOVID = {
    Country: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
  };

  const [Covid19, setCovid19] = useState<ICOVID[]>();
  const [isLoading, setIsLoading] = useState(false);

  const handleCovid = async () => {
    setIsLoading(true);
    const response = await API.get('https://api.covid19api.com/summary');
    setIsLoading(false);
    setCovid19(response.data.Countries);
  };

  useEffect(() => {
    handleCovid();
  }, []);

  return (
    <>
      <Row align="middle" justify="center">
        <Header loading={isLoading} />
      </Row>
      <Row align="middle" justify="space-around" gutter={[10, 10]}>
        {Covid19 &&
          Covid19.map((covid: ICOVID) => (
            <Col
              xxl={4}
              xl={4}
              lg={4}
              xs={24}
              sm={24}
              md={24}
              style={{ textAlign: 'center' }}
            >
              <Card
                loading={isLoading}
                type="inner"
                hoverable
                title={covid.Country}
                headStyle={{
                  textAlign: 'center',
                  fontSize: '26px',
                }}
              >
                <Typography.Paragraph>
                  <UserAddOutlined /> Novos confirmados: {covid.NewConfirmed}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <UserAddOutlined /> Total confirmados: {covid.TotalConfirmed}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <UserDeleteOutlined /> Novas mortes: {covid.NewDeaths}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <UserDeleteOutlined /> Total de mortos: {covid.TotalDeaths}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <PlusOutlined /> Novos curados: {covid.NewRecovered}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <PlusOutlined /> Total de curados: {covid.TotalRecovered}
                </Typography.Paragraph>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}
