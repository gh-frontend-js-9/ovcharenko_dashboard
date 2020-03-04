import React, {Component} from 'react';
import './InboxProfile.css'
class InboxProfile extends Component {
    render() {
        return (
            <div className='user-info-wrapper'>
                <div className='user-info'>
                    <div className='user-main-info'>
                        <span className='user-name'>
                            Lyall Roach
                        </span>
                        <span className='mg-bottom-15px'>
                            UX/UI Designer
                        </span>
                        <span className='mg-bottom-15px'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nobis.
                        </span>
                    </div>
                    <div className='user-info-info'>
                        <span className='title-info'>
                            Email
                        </span>
                        <span className='info-info'>
                            lyallroach@gmail.com
                        </span>
                        <span className='title-info'>
                            Phone
                        </span>
                        <span className='info-info'>
                            +48 500 400 300
                        </span>
                        <span className='title-info'>
                            Adress
                        </span>
                        <span className='info-info'>
                            65 Lorem St, Warsaw, PL
                        </span>
                        <span className='title-info'>
                            Organization
                        </span>
                        <span className='info-info'>
                            Symu.co
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default InboxProfile;