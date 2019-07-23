import React from 'react';
import './index.css';
import { render } from 'react-dom';
import Router from './components/Router';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

render(<Router />, document.getElementById('root'));
