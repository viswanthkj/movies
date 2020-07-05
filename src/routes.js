import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import {Dashboard, Detail} from './index';

const AppRoutes = () => (
  <Router>
    <Stack key="root">
      <Scene key="dashboard" component={Dashboard} title="Dashboard" />
      <Scene key="detail" component={Detail} title="Detail" />
    </Stack>
  </Router>
);

export default AppRoutes;
