import 'babel-polyfill';
import 'bluecore-ui-kit/lib/typography/Typography';

import {createElement} from 'react';
import {render} from 'react-dom';
import App from './components/App';

render(createElement(App), document.getElementById('react-container'));
