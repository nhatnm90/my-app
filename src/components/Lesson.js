import React, { Component } from 'react';

class Lesson extends Component {
    render() {
        return (
            <li className="list-group-item">{this.props.name}</li>
        );
    }
  // render() {
  //   return React.createElement('li', { className: 'list-group-item' }, 'LessonName');
  // }
}

export default Lesson;
