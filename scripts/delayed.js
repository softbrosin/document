// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
const re = document.createElement('p');
re.textContent = 'Home';
re.className = 'homeBtn';
document.body.append(re);
