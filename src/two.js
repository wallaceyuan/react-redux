/**
 * Created by yuan on 2018/5/7.
 */
import { createStore } from 'redux'

const reducer = (state = {count: 0}, action) => {
    switch (action.type){
        case 'INCREASE': return {count: state.count + 1};
        case 'DECREASE': return {count: state.count - 1};
        default: return state;
    }
}

const actions = {
    increase: () => ({type: 'INCREASE'}),
    decrease: () => ({type: 'DECREASE'})
}

const store = createStore(reducer);

store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(actions.increase()) // {count: 1}
store.dispatch(actions.increase()) // {count: 2}
store.dispatch(actions.increase()) // {count: 3}
