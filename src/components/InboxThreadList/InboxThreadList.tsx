import React, {Component} from 'react';
import API from "../../service/apiService";
import InboxThread from "../InboxThread/InboxThread";

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
                {this.state.threads.map(thread => {
                    return(
                        <InboxThread threads={thread}/>
                    )
                })}
            </div>
        );
    }
}

export default InboxThreadList;