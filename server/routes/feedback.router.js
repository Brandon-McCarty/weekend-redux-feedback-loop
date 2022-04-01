const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST feedback to database table "feedback"
router.post('/', (req, res) => {
    const feedback = req.body;

    const queryText = `
                        INSERT INTO "feedback" (
                        "feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);
                        `;


    const values = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]

    pool.query(queryText, values)
        .then((result) => {
            console.log('Added Feedback', feedback);
            res.sendStatus(201);
        }).catch((err) => {
            console.log(`Error in making database query ${queryText}`, err);
            res.sendStatus(500);
        })
})








module.exports = router;