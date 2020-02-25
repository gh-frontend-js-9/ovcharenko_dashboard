import React, {Component} from 'react';
import Project from "../../models/Project";
import API from "../../service/apiService";
import ProjectLine from "../ProjectLine/ProjectLine";
import './ProjectList.css'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getProject} from "../../redux/actions/getProject";


interface Props {

}

interface State {
    projects: Project[]
}

class ProjectList extends Component<Props,State> {

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
            <div className='project-list-wrapper'>
                {
                    this.state.projects.map(project => {
                        return(
                            <ProjectLine project={project} key={project._id}/>
                        )
                    })
                }
            </div>
        );
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        getProject: bindActionCreators(getProject, dispatch)
    };
};

export default connect(null, mapDispatchToProps)(ProjectList);