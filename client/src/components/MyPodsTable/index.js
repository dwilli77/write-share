import React from 'react';
import { Link } from 'react-router-dom'

const MyPodsTable = props => {

    return (
        <div className="col s12 container">
        <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Topic</th>
              <th>Active Participant</th>
          </tr>
        </thead>

        <tbody>
            {props.pods.map(pod => {
                return(
                <tr key={pod.id}>
                    <td><Link to={"./pods/"+pod.id}>{pod.name}</Link></td>
                    <td>{pod.topic}</td>
                    <td>{pod.active_participant}</td>
                </tr>
                )
            })}
        </tbody>
      </table>
      </div>
    )
}

export default MyPodsTable;