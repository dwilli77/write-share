import React from "react";

const PodNav = props => {
  return (
    <>
      <nav className="col s12">
        <div className="nav-wrapper">
          <h2 className="brand-logo center">
            {props.podData.name}
          </h2>
          <ul id="nav-mobile" className="right">
            <li>
              <p>Active Writer: {props.podData.activeParticipant}</p>
            </li>
            {props.podData.participantIds.indexOf(props.currentUserId) === -1 ? (
                <li>
                    <button className="btn">Join</button>
                </li>
            ) : (
                ""
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default PodNav;
