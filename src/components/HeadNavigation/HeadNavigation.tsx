import React, {Component} from 'react';
import './HeadNavigation.css'

class HeadNavigation extends Component {
    render() {
        return (
            <div className='wrapper-nav'>
                <div className='logo-wrapper'>
                    <div className='logo'>
                        VIIRTUS
                    </div>
                </div>
                <div className='icon-wrapper'>
                    <div className='icon'>
                        <div className='mg-rgt-25px' >
                            <i className="fas fa-search"></i>
                        </div>
                        <div className='mg-rgt-25px ' >
                            <i className="far fa-bell"></i>
                        </div>
                            <div className='users-avatar'>
                                <div className='mg-rgt-25px ' >
                                    ava
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