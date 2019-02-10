import React, {useState} from 'react'
import UserSidebar from '../../components/UserSidebar'

const CreatePod = props => {

    const [form, setValues] = useState({
        podName: "",
        topic: "",
        numParticipants: 1
    });

    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <UserSidebar/>
            <div className="col s10">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s8">
                        <input name="podName" value={form.podName} id="new-pod-name" type="text" className="validate" onChange={updateField} />
                        <label htmlFor="new-pod-name">Pod Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8">
                        <input name="topic" value={form.topic} id="new-pod-topic" type="text" className="validate" onChange={updateField} />
                        <label htmlFor="new-pod-topic">Topic</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s5">
                        <input name="numParticipants" value={form.numParticipants} id="new-pod-user-count" type="number" min="1" className="validate" onChange={updateField} />
                        <label htmlFor="new-pod-user-count">Maximum User Count</label>
                        </div>
                    </div>
                    </div>
                </div>
                <button className="btn waves-effect waves-light btn-large right"  onClick={() => props.handleNewPod(props.userId, form.podName, form.topic, form.numParticipants)}>Submit
                            <i className="material-icons right">send</i>
                    </button>
            </div>
        </>
    )
}

export default CreatePod;