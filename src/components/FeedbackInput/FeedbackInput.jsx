

function FeedbackInput({ handleChange, rating }) {

    return (
        <>
            <input
                required
                type="radio"
                name="rating"
                id="optionOne"
                value="1"
                checked={rating == '1'}
                onChange={handleChange}
            />
            <label htmlFor="optionOne">1</label>

            <input
                required
                type="radio"
                name="rating"
                id="optionTwo"
                value="2"
                checked={rating == '2'}
                onChange={handleChange}
            />
            <label htmlFor="optionTwo">2</label>

            <input
                required
                type="radio"
                name="rating"
                id="optionThree"
                value="3"
                checked={rating == '3'}
                onChange={handleChange}
            />
            <label htmlFor="optionThree">3</label>

            <input
                required
                type="radio"
                name="rating"
                id="optionFour"
                value="4"
                checked={rating == '4'}
                onChange={handleChange}
            />
            <label htmlFor="optionFour">4</label>

            <input
                required
                type="radio"
                name="rating"
                id="optionFive"
                value="5"
                checked={rating == '5'}
                onChange={handleChange}
            />
            <label htmlFor="optionFive">5</label>
        </>
    )
}

export default FeedbackInput;