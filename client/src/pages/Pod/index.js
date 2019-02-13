import React from 'react';
import { AppContext } from '../../Context';

class Pod extends React.Component {
    state = {

    }

    componentDidMount() {
        const id = this.props.match.params
        console.log(id)
    }

    // API call to get all data on given pod (passed via URL)

    render() {
        return (
        <AppContext.Consumer>
            {value => {
                return (
                    <>
                        <h1>hello</h1>
                    </>
                )
            }}

        </AppContext.Consumer>
        )
    }

}


export default Pod;