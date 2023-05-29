import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

import  { addOne } from '../frontend/generated/com/example/application/endpoints/CounterEndpoint.js';

createRoot(document.getElementById('outlet')!).render(createElement(App));

addOne(1).then((result) => console.log(result));
