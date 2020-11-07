import React from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';

export default function App(): React.ReactElement {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}
