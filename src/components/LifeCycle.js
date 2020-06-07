import React, { Component } from 'react';

class LifeCycle extends Component {

    constructor(props) {
        super(props);

        console.log('constructor');
    
        this.state = {
            stateTitle: 'Life of CODE'
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    } 

    handleClick() {
        this.setState({ stateTitle: 'updated by Clicking' });
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }


    componentDidUpdate() {
        console.log('componentDidUpdate');
    }


    render() {

        console.log('render');

        // const { title } = this.props;

        return (
        <div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.stateTitle}</h3>
                    </div>

                    <div className="panel-body">
                        <button type="button" className="btn btn-info" onClick={this.handleClick}>Click</button>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
        );
    }
}

export default LifeCycle;
