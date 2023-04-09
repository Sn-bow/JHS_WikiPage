import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/common/layout/Layout';
import Router from './Router'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>
);