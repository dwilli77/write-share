import React from 'react';
import { Link } from 'react-router-dom'

const MyPodsTable = props => {
    return (
        <div className="col s10 container">
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
                <tr>
                    <td><Link to={"./pods/"+pod.id} key={pod.id}>{pod.name}</Link></td>
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