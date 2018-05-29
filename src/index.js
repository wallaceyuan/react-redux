import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import List from './components/List'
import store from './store';

ReactDOM.render((
    <Provider store={store}>
        <React.Fragment>
            <Counter />
            <br/>
            <List />
        </React.Fragment>
    </Provider>
), document.getElementById('root'));