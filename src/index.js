
import React from 'react';
import { render } from 'react-dom'
import CounterApp from './CounterApp';

import './index.css';


const app = document.querySelector('#root');

render(<CounterApp value={1} />, app);
