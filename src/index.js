import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import MainRounter from './routers/MainRouter';
import Main from './views/Main';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main>
        <MainRounter/>
      </Main>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

