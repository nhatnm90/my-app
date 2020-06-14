import React, { Component } from 'react';
import { get, isEmpty, parseInt } from 'lodash';
const uuidv4 = require('uuid/v4')

class Form extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            level: 0
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const id = get(this.props, 'itemSelected.id', '');
        if (!isEmpty(id)) {
            const { name, level } = get(this.props, 'itemSelected', {});
            this.setState({
                id, name, level
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== null) {
            const { itemSelected: { id, name, level } } = nextProps;
            this.setState({
                id, name, level
            });
        }
    }

    handleSubmit(event) {
        const { id, name, level } = this.state;
        if (isEmpty(id)) {
            this.props.onAddTask({name, level: parseInt(level), id: uuidv4()});
        } else {
            this.props.onEditTask({name, level: parseInt(level), id});
        }
        event.preventDefault();
    }

    handleCancel() {
        this.setState({
            id: '',
            name: '',
            level: 0
        });
        this.props.onClickCancel();
    }

    handleInputChange(event) {
        const { target: { name, value } } = event;
        // const value = target.name === 'isGoing' ? target.checked : target.value;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        const { name, level } = this.state;
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">					
                  <form  onSubmit={this.handleSubmit} className="form-inline">
                    <div className="form-group">
                      {/* <label className="sr-only" htmlFor>label</label> */}
                      <input name="name" type="text" className="form-control" placeholder="Task name" value={name} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <select name="level" value={parseInt(level)} id="input" className="form-control" required="required" onChange={this.handleInputChange}>
                            <option value={0}>Low</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                        </select>
                      {/* <select name="level" id="input" className="form-control" required="required" onChange={this.handleInputChange}>
                        <option selected={parseInt(displayLevel) === 0 } value={0}>Low</option>
                        <option selected={parseInt(displayLevel) === 1 } value={1}>Medium</option>
                        <option selected={parseInt(displayLevel) === 2 } value={2}>High</option>
                      </select> */}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={this.handleCancel} type="button" className="btn btn-danger">Cancel</button>
                  </form>
                </div>
              </div>
        );
    }
}

export default Form;