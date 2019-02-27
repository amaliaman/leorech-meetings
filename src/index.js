import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import './styles/index.scss';

import 'bootstrap/dist/js/bootstrap.min.js';

import App from './App';
import rootStore from '../src/stores/RootStore';

ReactDOM.render(
    <Provider rootStore={rootStore}>
        <App />
    </Provider>,
    document.getElementById('root'));