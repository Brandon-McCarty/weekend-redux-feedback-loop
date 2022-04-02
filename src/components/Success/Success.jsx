import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'

function Success () {

    const history = useHistory();
    const dispatch = useDispatch();

    const startNewFeedback = () => {
        dispatch({type: 'SUBMIT_FEEDBACK'})
        history.push('/')
    }

    return (

        <>
        <h1>Thank you for your Feedback!</h1>
        <br />
        <button onClick={startNewFeedback}>Start New Feedback</button>
        </>
    )
}

export default Success;