import React, { Component } from 'react';
import Title from './components/todoList/Title'
import Control from './components/todoList/Control/Control'
import Form from './components/todoList/Form'
import TaskList from './components/todoList/TaskList'
import items from './mockData/tasks'

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            items,
            isShowAddForm: false,
            inputSearch: ''
        };

        this.handleToogleAddForm = this.handleToogleAddForm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleToogleAddForm() {
        this.setState({
            isShowAddForm: !this.state.isShowAddForm
        });
    }

    handleSearch(value) {
        let filterItems = items;
        if (value !== '') {
            filterItems = items.filter(x => x.name.includes(value.toLowerCase()));
        }
        this.setState({
            items: filterItems
        });
    }

    render() {
        let addForm = null;
        let isShowAddForm = this.state.isShowAddForm;
        if (isShowAddForm) {
            addForm = <Form onClickCancel={this.handleToogleAddForm} />;
        }

        return (
            <div>
                <Title />
                <Control
                    onClick = {this.handleToogleAddForm}
                    isShowAddForm = {isShowAddForm}
                    onClickSearch = {this.handleSearch}
                />
                { addForm }
                <TaskList items={this.state.items}/>
            </div>
        );
    }
}

export default TodoList;
