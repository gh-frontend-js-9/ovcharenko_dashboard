import React, {Component} from 'react';
import './InboxThread.css'


class InboxThread extends Component<any,any> {



    render() {

        let {threads} = this.props;

        return (
            <div>
                <div className='thread-box'>
                            <div className='name_date'>
                            <div className='name-message'>
                                {threads.users[0].name}
                            </div>
                            <div className='date-message'>
                                02.02.2020
                            </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                </div>
        );
    }
}

export default InboxThread;