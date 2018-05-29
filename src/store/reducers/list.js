import * as types from '../action-types'

export default function (state = { lists: [{text:'移动端计划'}],newType:'all'}, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return {...state,lists:[...state.lists,{text:action.text}]}
        case types.TOGGLE_TODO:
            return {...state,lists:state.lists.map((item,index)=>{
                if(index == action.index){
                    item.completed = !item.completed
                }
                return item
            })}
        case types.DEL_TODO:
            return {...state,lists:[...state.lists.slice(0,action.index),...state.lists.slice(action.index+1)]}
        case types.SWITCH_TYPE:
            console.log({...state,newType:action.newType})
            return {...state,newType:action.newType}
        default:
            return state;
    }
}