import React, { Component } from 'react';
import Course from './components/Course';

class App extends Component {

    displyCourse(courses) {
        return courses.map((c, index) => {
            return <Course key={index} name={c.name} isFree={c.isFree}>{c.lesson}</Course> 
        });
    }

    render() {

        const listCourse = [
            {
                name: 'ReactJS',
                isFree: true,
                lesson: ['Overview', 'Props']
            },
            {
                name: 'C#',
                isFree: false,
                lesson: ['OOP', 'Delegate']
            },   
            {
                name: 'NodeJS',
                isFree: true,
                lesson: ['ES6', 'MiddleWare']
            }
        ];


        return (
            <div className="row">
                {this.displyCourse(listCourse)}
            </div>
        );
  }
}

export default App;
