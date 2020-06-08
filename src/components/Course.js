import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isShowOutline: false
        };

        // This binding is necessary to make `this` work in the callback
        this.handleBuy = this.handleBuy.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleToogle = this.handleToogle.bind(this);
      } 

    handleView() {
        alert('View');
    }

    handleLike(text) {
        alert(text);
    }

    handleBuy() {
        alert(`Buy the course ${this.props.name}`);
    }

    handleRegister() {
        alert(`Register the course ${this.props.name} by ${this.refs.username.value} successfully!`);
    }

    handleToogle() {
        this.setState({ isShowOutline: !this.state.isShowOutline });
    }

    showFreeButton(){
        if(this.props.isFree) {
            return (
            <div className="btn-group">
                <button type="button" className="btn btn-success" onClick={this.handleView}>View</button>
                <button type="button" className="btn btn-warning" onClick={() => this.handleLike('Liked')}>Like</button>
                <button type="button" className="btn btn-danger" onClick={this.handleBuy}>Buy</button>
            </div>)
        }
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Username" ref="username"/>
                <div className="input-group-btn">
                    <button className="btn btn-success" type="button" onClick={this.handleRegister} >Button</button>
                </div>
            </div>
        );
    }

    displayLesson(lessons) {
        return lessons.map((l, i) => {
            return <Lesson key={i} name={l}/>
        });
    }

    render() {
        let lessons = null;
        if(this.state.isShowOutline) {
            lessons =  (
                <ul className="list-group">
                    {this.displayLesson(this.props.children)}
                </ul>
            );
        }

        return (
        <div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.name}</h3>
                    </div>

                    <div className="panel-body">
                        <button type="button" className="btn btn-info" onClick={this.handleToogle}>more...</button>
                       {lessons} 
                    </div>
                    <div className="panel-footer">
                        {this.showFreeButton()}
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
        );
    }
}

export default Course;
