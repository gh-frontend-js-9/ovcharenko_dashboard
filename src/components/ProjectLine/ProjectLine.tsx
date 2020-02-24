import React, {Component} from 'react';
import './ProjectLine.css';
import Project from "../../models/Project";


interface Props {
    project: Project
}

class ProjectLine extends Component<Props> {


    render() {

            let {project} = this.props;
        let dateFormat = require('dateformat');
        let now = Date.now();
        let deadline = Math.floor((Date.parse(project.deadline) - Date.now())/86400000);

            return (
            <div className='wrapper'>
             <div className='block-project'>
                <div className='box-project'>
                    <div>
                        <div className='title'>
                            {project.title}
                        </div>
                        <div> 
                            {project.company}
                        </div>
                    </div>
                    <div className='cost'>
                        {project.cost}
                    </div>
                    <div className='date'>
                        <div>
                            {
                                dateFormat(project.deadline, "d mmmm yyyy")
                            }
                        </div>
                        <div>
                            {deadline} days left
                        </div>
                    </div>
                    <div className='hours'>
                        {project.timeSpent + " hours"}
                    </div>
                    <div>
                        {project.progress + "%" }
                    </div>
                    <div className="status">
                        {project.status}
                    </div>
                    <div className='user-porfile'>
                        <div className='user-ava'>
                            <img src={'user.png'} alt="" width='50px' className='ava'/>
                        </div>
                        <div>
                            <div>
                                {
                                    project.assigned ? project.assigned.name : "Mr. Benedict"
                                }
                            </div>
                            <div>
                                {
                                    project.assigned ? project.assigned.description : "Master/Lomaster"
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            )
    }
}

export default ProjectLine;