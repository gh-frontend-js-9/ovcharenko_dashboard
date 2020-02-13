import React, {Component} from 'react';
import './ProjectTitle.css'

class ProjectTitle extends Component {
    render() {
        return (
            <div className='title'>
                <span>Project title</span>
                <span>Value</span>
                <span>Deadline</span>
                <span>Time spent</span>
                <span>Progress</span>
                <span>Status</span>
                <span>Assigned to</span>
            </div>
        );
    }
}

export default ProjectTitle;