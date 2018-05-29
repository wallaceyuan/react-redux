/**
 * Created by yuan on 2018/4/28.
 */
import React, { Component } from 'react';
import store from '../store';
import actions from '../store/actions/list';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'


class List extends Component {
    static propTypes = {
        lists: PropTypes.array
    };
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{});
    }
    componentWillUnmount(){
        this.unsubscribe();//取消订阅
    }
    handleAdd = (e)=>{
        let code = e.keyCode
        if(code == 13){
            this.props.add_todo(this.todo.value)
            this.todo.value = ''
        }
    }
    render(){
        const t = this
        return(
            <div>
                <input ref={input => this.todo = input} onKeyDown={this.handleAdd}/>
                <ul>
                    {
                        this.props.lists.map((list,index)=>(
                            <li key={index} style={{textDecoration:list.completed?'line-through':''}}>
                                <span onDoubleClick={()=>t.props.toggle_todo(index)}>{list.text}</span>
                                <button onClick={()=>t.props.del_todo(index)}>删除</button>
                            </li>
                        ))
                    }
                </ul>
                <button onClick={()=>this.props.switch_type('all')} style={{color:this.props.newType == 'all'?'red':'black'}}>全部</button>
                <button onClick={()=>this.props.switch_type('completed')} style={{color:this.props.newType == 'completed'?'red':'black'}}>只显示已完成</button>
                <button onClick={()=>this.props.switch_type('uncompleted')} style={{color:this.props.newType == 'uncompleted'?'red':'black'}}>只显示未完成</button>
            </div>
        )
    }
}

export default connect(
    state=>(
        {...state.todos,lists:state.todos.lists.filter(item=>{
            if(state.todos.newType == 'all'){
                return item
            }else if(state.todos.newType == 'completed'){
                return item.completed
            }else if(state.todos.newType == 'uncompleted'){
                return !item.completed
            }
        })}
    ),
    actions
)(List)