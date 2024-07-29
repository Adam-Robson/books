// include jsdom for DOM use in tests on travis
import { JSDOM } from 'jsdom';

// set up jsdom
const { window } = new JSDOM(``, {
  url: 'http://localhost:5500'
});
global.window = window;
global.document = window.document;
global.FormData = window.FormData;
global.localStorage = window.localStorage;
global.sessionStorage = window.sessionStorage;
global.URLSearchParams = window.URLSearchParams;
global.URL = window.URL;

import './tests.js';