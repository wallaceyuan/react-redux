import * as types from "../action-types";

export default{
    add_todo(text){
        return { type: types.ADD_TODO, text: text}
    },
    del_todo(idx){
        return {type:types.DEL_TODO, index: idx}
    },
    toggle_todo(index){
        return {type:types.TOGGLE_TODO, index}
    },
    del_todo(index){
        return {type:types.DEL_TODO, index}
    },
    switch_type(newType){
        return {type:types.SWITCH_TYPE, newType}
    }
}