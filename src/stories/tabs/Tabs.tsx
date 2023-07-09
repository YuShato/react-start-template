import React, { useState } from 'react';
import { Tabs, Tab, Content } from './ui';
import FullDescription from '../full-description/FullDescription';
import { fullDescription } from '../item/full/mockData';
import { TabData } from './types';

export const mockTabsData: TabData[] = [
  {
    id: 0,
    name: 'Product Description',
    component: <FullDescription {...fullDescription} />,
  },
  {
    id: 1,
    name: 'Reviews (19)',
    component: <div>Work in Progress</div>,
  },
];

const TabsCmp = ({ data = [] }: { data: TabData[] | [] }) => {
  const [active, setActive] = useState(0);
  const handleClick = (index: number) => {
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <>
      <Tabs>
        {data.map((tab) => (
          <Tab key={tab.id} onClick={() => handleClick(tab.id)} active={tab.id === active} id={String(tab.id)}>
            {tab.name}
          </Tab>
        ))}
      </Tabs>
      <>
        {data.map((tab) => (
          <Content key={tab.id} active={tab.id === active}>
            {tab.component}
          </Content>
        ))}
      </>
    </>
  );
};

export default TabsCmp;
