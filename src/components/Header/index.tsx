import React from 'react';
import { PageHeader } from 'antd';
import Loading from '../Loading';

export default function Header({ loading }: any) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <PageHeader
          title="Covid-19"
          subTitle="World Wide"
          ghost
          style={{ fontSize: '26px' }}
        />
      )}
    </>
  );
}
