import React, { Component } from 'react';

class TaskItem extends Component {

    generateLevel(level){
        if ((level) === 0) {
            return (<span className="label label-info">Low</span>);
        } else if (level === 1) {
            return (<span className="label label-default">Medium</span>);
        } else {
            return (<span className="label label-danger">High</span>);
        }
    }

    render() {
        const { val: { index, name, level, id } } = this.props;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{this.generateLevel(level)}</td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={() => this.props.onEditItem({id, name, level})}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => this.props.onDeleteItem(id)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;