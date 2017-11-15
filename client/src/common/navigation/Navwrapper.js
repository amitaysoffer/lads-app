import React, { Component } from 'react';
import { Switch, Route, LinkProps, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Home from '../../components/home/student/StudentHome'
import Lessons from '../../components/lessons/lessons'
import Lesson from '../../components/lesson/lesson'

class Navwrapper extends Component {

    render() {
        const { props } = this;

        return (
            <div className="">
                <Navbar />

                <div className="row">
                    <div className="col-xs-2" id="sidebarBox">

                        <Sidebar sideprops={this.props.newprops} />

                    </div>
                    <div className="col-xs-10">
                        <Route path={`${props.newprops.match.path}/:routeName`} component={RouteName} />

                    </div>

                </div>

            </div>
        )

    }
}

const RouteName = ({ match }) => {
    switch (match.params.routeName) {
        case 'home':
            return <Home />
        case 'lessons':
            return <Lessons match={match}/>
        case 'lesson':
            return <Lesson />
    }
}

export default Navwrapper;