import React, {Component} from 'react';
import API from "../../service/apiService";
import InboxThread from "../InboxThread/InboxThread";
import ConvButton from "../ConvButton/ConvButton";

class InboxThreadList extends Component<any,any> {
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
                {this.state.threads.map(thread => {
                    return(
                        <InboxThread threads={thread} key={thread._id}/>
                    )
                })}
                </div>
                    <ConvButton/>
                {/*<div className='box-new-convers'>
                    <button className='new-conv-button'>
                        + New coversation
                    </button>
                </div>*/}
                </div>
            </div>

        );
    }
}

export default InboxThreadList;