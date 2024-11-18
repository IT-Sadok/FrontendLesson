import { Layout } from 'antd';
import React from 'react';

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

function Footer() {
  return <Layout.Footer style={footerStyle}>2024</Layout.Footer>;
}

export default Footer;
