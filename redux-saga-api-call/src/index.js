import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Home from './components/index';
import store from './store/store'

render(<Provider store={store}>
    <Home />
</Provider>, document.getElementById('root'));
