import React from 'react';
import { AppContext } from '../../Context';
import API from '../../utils/API';
import UserSidebar from '../../components/UserSidebar';
import PodNav from '../../components/PodNav'

class Pod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            podId: this.props.match.params.id,
            activeParticipant: "",
            creator: "",
            creatorId: "",
            name: "",
            numParticipants: 0,
            participantIds: [],
            topic: "",
            totalParticipants: []
        };
      }

    componentDidMount() {
        API.getOnePod({podId: this.state.podId})
        .then(res => {
            this.setState({
                activeParticipant: res.data.activeParticipant,
                creator: res.data.creator,
                creatorId: res.data.creatorId,
                name: res.data.name,
                numParticipants: res.data.numParticipants,
                participantIds: res.data.participantIds,
                topic: res.data.topic,
                totalParticipants: res.data.totalParticipants
            }, ()=> console.log(this.state))
        })
        .catch(err => console.log(err))
    }

    yourTurn(username) {
        return this.state.activeParticipant === username
    }

    // API call to get all data on given pod (passed via URL)
    // need to add array of contentIds to Pod model and populate the content ids so that we can get all the posts htmlFor the pod thus far.

    render() {
        return (
        <AppContext.Consumer>
            {value => {
                return (
                    <>
                        <UserSidebar />
                        <div className="col s10">
                        <PodNav podData={this.state} currentUserId={value.currentUserId} currentUser={value.currentUser}/>
                        {this.state.totalParticipants.length ? (<p>Pod Participants: {this.state.totalParticipants.join(", ")}</p>) : ("")}
                        <div className="row">
                        <form className="col s12">
                            <div className="row">
                            <div className="input-field col s12">
                                <textarea disabled={!this.yourTurn(value.currentUser)} id="textarea1" className="materialize-textarea" length="3000"></textarea>
                                <label htmlFor="textarea1">Your Content Here</label>
                            </div>
                            </div>
                            <button disabled={!this.yourTurn(value.currentUser)} className="btn right">Post</button>
                        </form>
                        </div>

                        <h3>Story Time:</h3>
                        

                        </div>
                    </>
                )
            }}

        </AppContext.Consumer>
        )
    }

}


export default Pod;