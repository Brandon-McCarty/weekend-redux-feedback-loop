import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

// Material UI
import Button from '@material-ui/core/Button';

function Success ({rating, setRating}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const startNewFeedback = () => {
        dispatch({type: 'SUBMIT_FEEDBACK'});
        setRating('');
        history.push('/');
    }

    return (

        <>
        <h1>Thank you for your Feedback!</h1>
        <br />
        <Button variant="contained" color="primary" onClick={startNewFeedback}>Start New Feedback</Button>
        </>
    )
}

export default Success;