import React, { useState } from 'react';
import FunctionContextComponent from './ContextComponent';
import ThemeProvider from '../store/storeContext/ThemeContext';
import Blank from '../component/Blank';
import { Provider } from 'react-redux';
import store from '../store/storeRedux';
import Head from '../component/Head';

const App = () => {
  return (
    <Provider store={store}>
      <Blank page="HALU" />
      <Head />
    </Provider>
  );
};

export default App;
