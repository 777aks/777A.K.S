/*
 * Copyright © 2026 AKS ONE CI
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { QuickActions } from './pages/QuickActions';
import { AksOneHome } from './pages/aks-one-ci/Home';
import { Marketplace } from './pages/aks-one-ci/Marketplace';
import { Directory } from './pages/aks-one-ci/Directory';
import { Auth } from './pages/aks-one-ci/Auth';
import { UserDashboard } from './pages/aks-one-ci/UserDashboard';
import { Profile } from './pages/aks-one-ci/Profile';
import { AccountingDashboard } from './pages/aks-one-ci/accounting/AccountingDashboard';
import { Invoices } from './pages/aks-one-ci/accounting/Invoices';
import { Expenses } from './pages/aks-one-ci/accounting/Expenses';
import { Inventory } from './pages/aks-one-ci/accounting/Inventory';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quick-actions" element={<QuickActions />} />

          {/* AKS ONE CI Routes */}
          <Route path="/aks-one" element={<AksOneHome />} />
          <Route path="/aks-one/marketplace" element={<Marketplace />} />
          <Route path="/aks-one/directory" element={<Directory />} />
          <Route path="/aks-one/auth" element={<Auth />} />
          <Route path="/aks-one/dashboard" element={<UserDashboard />} />
          <Route path="/aks-one/profile" element={<Profile />} />

          {/* Accounting Routes */}
          <Route path="/aks-one/accounting" element={<AccountingDashboard />} />
          <Route path="/aks-one/accounting/invoices" element={<Invoices />} />
          <Route path="/aks-one/accounting/expenses" element={<Expenses />} />
          <Route path="/aks-one/accounting/inventory" element={<Inventory />} />

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
