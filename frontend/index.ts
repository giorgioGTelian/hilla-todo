import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

import { CounterEndpoint } from './generated/endpoints.js';

createRoot(document.getElementById('outlet')!).render(createElement(App));

CounterEndpoint.addOne(1).then((result) => console.log(result));
