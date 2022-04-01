const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST feedback to database table "feedback"
router.post('/feedback', (req, res) => {

    const queryText = `
                        INSERT INTO "feedback" (
                        "feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, '$4');
                        `;
    

    values = []
                    
    pool.query(queryText, values)
})








module.exports = router;