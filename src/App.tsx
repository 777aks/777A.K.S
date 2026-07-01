import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { QuickActions } from './pages/QuickActions';
import { Windows } from './pages/Windows';
import { Network } from './pages/Network';
import { Diagnostics } from './pages/Diagnostics';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quick-actions" element={<QuickActions />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/network" element={<Network />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <h2 className="text-2xl font-bold">Module Under Construction</h2>
              <p>This feature will be available in a future update.</p>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
