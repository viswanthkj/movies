/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import {Dashboard, Detail} from './index';

const AppRoutes = () => (
  <Router navBarButtonColor="#FFF">
    <Stack key="root" headerLayoutPreset="center">
      <Scene
        key="dashboard"
        component={Dashboard}
        title="Home"
        navigationBarStyle={{backgroundColor: '#c9125c'}}
        titleStyle={{color: '#FFF'}}
      />
      <Scene
        key="detail"
        component={Detail}
        title="Detail"
        navigationBarStyle={{backgroundColor: '#c9125c'}}
        titleStyle={{color: '#FFF'}}
      />
    </Stack>
  </Router>
);

export default AppRoutes;
