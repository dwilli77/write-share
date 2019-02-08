import React from 'react'
import { Link } from "react-router-dom";


const Welcome = props => {
    return (
        <>
            <h1>This is the Welcome Page</h1>
            <p>User has no signed in yet</p>
            <Link to="/register">Click Here To Register</Link>
        </>        
    )

}

export default Welcome;