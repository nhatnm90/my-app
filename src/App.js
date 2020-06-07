import React, { Component } from 'react';
import Course from './components/Course';
import LifeCycle from './components/LifeCycle';
import Clock from './components/Clock';

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
            <div>
                <div className="row">
                    {this.displyCourse(listCourse)}
                </div>
                
                <div className="row">
                    <LifeCycle title='Life Cycle' />
                </div>

                <div className="row">
                    <Clock />
                </div>
            </div>
        );
  }
}

export default App;
