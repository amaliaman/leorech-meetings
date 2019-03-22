import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import './styles/index.scss';
import './styles/bulma-bidi/bulma.sass';

import App from './App';
import rootStore from '../src/stores/RootStore';

ReactDOM.render(
    <Provider rootStore={rootStore}>
        <App />
    </Provider>,
    document.getElementById('root'));