import React from "react";

const PodNav = props => {
  return (
    <>
      <nav className="col s12">
        <div className="nav-wrapper">
          <h2 className="brand-logo center">
            {props.podData.name}
          </h2>
          <ul className="left">
          {(props.podData.activeParticipant === props.currentUser) && (props.podData.participantIds.indexOf(props.currentUserId) > -1) ? (
              <li>
                <button className="btn" onClick={props.iterateUser}>Skip Turn</button>
              </li>
            ) : (
              ""
            )}
            {props.podData.participantIds.indexOf(props.currentUserId) === -1 ? (
                <li>
                    <button onClick={()=> props.joinPod(props.currentUserId, props.currentUser)} className="btn">Join</button>
                </li>
            ) : (
                ""
            )}
          </ul>
          <ul id="nav-mobile" className="right">
            <li>
              <p>Active Writer: {props.podData.activeParticipant}</p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default PodNav;
