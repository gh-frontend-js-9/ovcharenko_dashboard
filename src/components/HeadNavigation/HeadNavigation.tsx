import React, {Component} from 'react';
import './HeadNavigation.css'
import ProjectButton from "../ProjectButton/ProjectButton";
import API from "../../service/apiService";
import Project from "../../models/Project";

interface Props {

}

interface State {
    projects: Project[]
}

class HeadNavigation extends Component<Props,State> {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    updateProjects = () => {
        API.getProject()
            .then((response) => {
                this.setState({
                    projects: response,
                })
            })
    };

    componentDidMount(): void {
        this.updateProjects()
    }

    render() {
        return (
            <div className='wrapper-nav'>
                <div className='logo-wrapper'>
                    <div className='logo'>
                        <img src={'logo.png'} alt=""/>
                    </div>
                </div>

                <div className='icon-wrapper'>
                    <ProjectButton update={this.updateProjects} />
                    <div className='icon'>
                        <div className='mg-rgt-25px'>
                            <i className="fas fa-search"></i>
                        </div>
                        <div className='mg-rgt-25px'>
                            <i className="far fa-bell"></i>
                        </div>
                            <div className='users-avatar'>
                                <div className='mg-rgt-25px'>
                                    <img src={'user.png'} alt="" width='40px'/>
                                </div>
                                <div>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadNavigation;