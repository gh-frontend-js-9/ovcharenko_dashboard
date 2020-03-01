import React, {Component} from 'react';
import './InboxThread.css'
import API from "../../service/apiService";

class InboxThread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            threads: []
        }
    }

    updateTreads = () => {
        API.getAllThread(sessionStorage.getItem('token'))
            .then((response) => {
                this.setState({
                    threads: response,
                })
            })
    };

    componentDidMount(): void {
        this.updateTreads()
    }

    render() {

        return (
            <div>
                <div className='thread-block'>
                    <div className='wrapper-threads'>
                        <div className='thread-box'>
                            <div className='name_date'>
                            <div className='name-message'>
                                Anton Ovcharenko
                            </div>
                            <div className='date-message'>
                                02.02.2020
                            </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
                                </div>
                                <div className='date-message'>
                                    02.02.2020
                                </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
                                </div>
                                <div className='date-message'>
                                    02.02.2020
                                </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
                                </div>
                                <div className='date-message'>
                                    02.02.2020
                                </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
                                </div>
                                <div className='date-message'>
                                    02.02.2020
                                </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
                                </div>
                                <div className='date-message'>
                                    02.02.2020
                                </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
                                </div>
                                <div className='date-message'>
                                    02.02.2020
                                </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
                                </div>
                                <div className='date-message'>
                                    02.02.2020
                                </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
                                </div>
                                <div className='date-message'>
                                    02.02.2020
                                </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
                                </div>
                                <div className='date-message'>
                                    02.02.2020
                                </div>
                            </div>
                            <div className='last-message'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid commodi consequatur corporis cum dignissimos doloremque ducimus eius eligendi excepturi officiis, quaerat qui quos, ratione sequi similique tempora tempore voluptate.
                            </div>
                        </div>
                        <div className='thread-box'>
                            <div className='name_date'>
                                <div className='name-message'>
                                    Anton Ovcharenko
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

                    <div className='box-new-convers'>
                        <button className='new-conv-button'>
                           + New coversation
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InboxThread;