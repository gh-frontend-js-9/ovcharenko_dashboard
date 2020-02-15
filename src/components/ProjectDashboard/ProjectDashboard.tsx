import React, {Component} from 'react';
import './ProjectDashboard.css'
import HeadNavigation from "../HeadNavigation/HeadNavigation";
import SideNavigation from "../SideNavigation/SideNavigation";
import ProjectsInfo from "../ProjectsInfo/ProjectsInfo";
import ProjectList from "../ProjectList/ProjectList";

class ProjectDashboard extends Component {
    render() {
        return (
            <div>
                <HeadNavigation/>
                <SideNavigation/>
                <ProjectsInfo/>
                <ProjectList/>
            </div>
        );
    }
}

export default ProjectDashboard;