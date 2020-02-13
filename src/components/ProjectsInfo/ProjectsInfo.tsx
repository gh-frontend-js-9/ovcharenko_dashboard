import React, {Component} from 'react';
import './ProjectsInfo.css'

class ProjectsInfo extends Component {
    render() {
        return (
            <div className='projects-info'>
                <div className='info'>
                    <div className='mg-rgt-20px'>
                        All Projects (358)
                    </div>
                    <div>
                        Workflow
                    </div>
                </div>
                <div className='dropdown'>
                    <div className='mg-rgt-20px'>
                        Show projects:
                    </div>
                    <div>
                        dropdown
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsInfo;