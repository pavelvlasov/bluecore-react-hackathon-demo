import 'babel-polyfill';

import {createElement} from 'react';
import {render} from 'react-dom';
import App from './components/App';

render(createElement(App), document.getElementById('react-container'));
