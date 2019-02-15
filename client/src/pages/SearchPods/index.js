import React from 'react'
import UserSidebar from '../../components/UserSidebar'
import {Link} from 'react-router-dom'
import API from '../../utils/API';

class SearchPods extends React.Component {
    state = {
        pods: []
    }

    componentDidMount() {
        API.findAll().then(res => {
            this.setState({
                pods: res.data
            })
        }).catch(err => console.log(err))
    }

    render() {
    return(
        <>
        <UserSidebar />
        <div className="col s10">
            <div className="container">
            <h4>Search for Writing Pods</h4>
            <nav className="col s12" id="pod-searchbar">
                <div className="nav-wrapper">
                <div>
                    <form className="input-field">
                    <input id="pod-search" type="search" placeholder="Search Pods Here" required />
                    <label className="label-icon" htmlFor="pod-search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                    </form>
                </div>
                </div>
            </nav>
            <table>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Topic:</th>
                        <th>Creator:</th>
                        <th>#:</th>
                        <th>Max #:</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.pods.map(pod => {
                    return (
                        <tr key={pod._id}>
                            <td><Link to={"./pods/"+pod._id}>{pod.name}</Link></td>
                            <td>{pod.topic}</td>
                            <td>{pod.creator}</td>
                            <td>{pod.totalParticipants.length}</td>
                            <td>{pod.numParticipants}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            
            </div>
        </div>
        </>
    )}
}

export default SearchPods;