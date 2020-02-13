import React, {Component} from 'react';
import './SideNavigation.css'

class SideNavigation extends Component {
    render() {
        return (

            <div>
                <div className='block-nav'>
                    <div className='box-nav'>
                        <i className="fas fa-home"></i>
                    </div>
                    <div className='box-nav'>
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className='box-nav'>
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className='box-nav'>
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className='box-nav'>
                        <i className="fas fa-user-friends"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideNavigation;