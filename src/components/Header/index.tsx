import { Layout, Menu, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const headerStyle: React.CSSProperties = {
  display: 'flex',
  color: '#fff',
  height: 64,
  justifyContent: 'space-between',
  backgroundColor: '#4096ff',
};

const menuStyle: React.CSSProperties = {
  backgroundColor: '#4096ff',
};

const items: MenuItem[] = [
  {
    key: '/',
    label: <Link to="/">Home</Link>,
  },
  {
    key: '/facts',
    label: <Link to="/facts">Facts</Link>,
  },
];

function Header() {
  return (
    <Layout.Header style={headerStyle}>
      Mentorship Lesson Dogs API
      <Menu style={menuStyle} items={items} mode="horizontal" />
    </Layout.Header>
  );
}

export default Header;
