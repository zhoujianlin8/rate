
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Demo from '../src/index';
    ReactDOM.render(<Demo value={4.5} disabled={true} />, document.getElementById('container'));
