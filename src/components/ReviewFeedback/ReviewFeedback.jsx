import {useSelector} from 'react-redux'

function ReviewFeedback() {

    const feedback = useSelector(store => store.feedback)

    return (
        <>
            <h1>Review Your Feedback</h1>

            <h3>Feelings: {feedback[0]}</h3>
            <br />
            <h3>Understanding: {feedback[1]}</h3>
            <br />
            <h3>Support: {feedback[2]}</h3>
            <br />
            <h3>Comments: {feedback[3]}</h3>
        </>
    )
}

export default ReviewFeedback;