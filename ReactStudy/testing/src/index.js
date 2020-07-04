import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

// publicに存在するindex.htmlのroot要素にReactComponentを挿入する。
ReactDOM.render(<App />,
    document.querySelector('#root'))