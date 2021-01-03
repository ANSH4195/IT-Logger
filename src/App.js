import React, { useEffect, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/layout/Searchbar';
import Addbtn from './components/layout/Addbtn';

import Logs from './components/logs/Logs';
import Addlogmodal from './components/logs/Addlogmodal';
import Editlogmodal from './components/logs/Editlogmodal';

import Addtechmodal from './components/techs/Addtechmodal';
import Techlistmodal from './components/techs/Techlistmodal';

const App = () => {
  useEffect(() => {
    // Init mat js
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <Addbtn />
          <Addlogmodal />
          <Editlogmodal />
          <Addtechmodal />
          <Techlistmodal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
