import React, {Component} from 'react';
import './SideNavigation.css'
import { Link } from 'react-router-dom';

class SideNavigation extends Component {
    render() {
        return (

            <div>
                <div className='block-nav'>
                    <div className='box-nav'>
                        <i className="fas fa-home"></i>
                    </div>
                    <Link to={'/dashboard'} className='side-bar__link'>
                    <div className='box-nav'>
                        <i className="fas fa-bars"></i>
                    </div>
                    </Link>
                    <div className='box-nav'>
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <Link to={'/inbox'} className='side-bar__link'>
                    <div className='box-nav'>
                        <i className="fas fa-envelope"></i>
                    </div>
                    </Link>
                    <div className='box-nav'>
                        <i className="fas fa-user-friends"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideNavigation;