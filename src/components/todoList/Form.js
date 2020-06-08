import React, { Component } from 'react';

class Form extends Component {


    constructor(props) {
        super(props);

        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel() {
        this.props.onClickCancel();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">					
                  <form action method="POST" className="form-inline">
                    <div className="form-group">
                      {/* <label className="sr-only" htmlFor>label</label> */}
                      <input type="text" className="form-control" id placeholder="Task name" />
                    </div>
                    <div className="form-group">
                      {/* <label className="sr-only" htmlFor>label</label> */}
                      <select name id="input" className="form-control" required="required">
                        <option value={0}>Low</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                      </select>
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