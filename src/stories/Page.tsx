import React from 'react';

import './page.css';
import Layout from './layout/Layout';
import FullItem from './item/full/FullItem';
import { mockProductData } from './item/full/mockData';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <Layout>
      <FullItem data={mockProductData} />
    </Layout>
  );
};
