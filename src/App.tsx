import { ConfigProvider, Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import FactsPage from './pages/FactsPage';
import BreedPage from './pages/BreedPage';

import './App.css';
import React from 'react';

const layoutStyle = {
  width: '100vw',
  minHeight: '100vh',
};

const contentStyle: React.CSSProperties = {
  minHeight: 'calc(100vh - 100px)',
  backgroundColor: '#ffffff',
};

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            horizontalItemSelectedColor: '#ffffff',
            algorithm: true, // Enable algorithm
          },
        },
      }}
    >
      <BrowserRouter>
        <Layout style={layoutStyle}>
          <Header />
          <Layout.Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/facts" element={<FactsPage />} />
              <Route path="/breeds/:id" element={<BreedPage />} />
            </Routes>
          </Layout.Content>
          <Footer />
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
