const express = require('express');
const watson = require('watson-developer-cloud');
const cheerio = require('cheerio');
const axios = require('axios');

const router = express.Router();

// Instantiate new Watson Assistant Service instance
var assistant = new watson.AssistantV2({
    iam_apikey: process.env.ASSISTANT_API_KEY,
    version: '2018-11-08',
    url: process.env.ASSISTANT_URL
});

// New Watson Assistant service Session
router.get('/new-session', function(req, res) {
    
    assistant.createSession({
        assistant_id: process.env.ASSISTANT_ID,
    }, function(err, response) {
        var sessionData;
        if (err) {
          console.error(err);
        } else{
          console.log(JSON.stringify(response, null, 2));
          sessionData = res.json(response);
        }

        return sessionData;
    });
});

// Send message to Watson Assistant service
router.post('/message', function(req, res) {
    var assistant_id = process.env.ASSISTANT_ID || '<assistant_id>';

    if (!assistant_id || assistant_id === '<assistant_id>') {
        return res.json({
            'output': {
                'text': 'The app has not been configured with an <b>assistant_id</b> environment variable.'
            }
        });
    }

    var payload = {
        assistant_id: assistant_id,
        input: {}
    };

    if (req.body) {

        if (req.body.input) {
            payload.input = req.body.input;
        }
        
        if (req.body.session_id) {
            payload.session_id = req.body.session_id;
        }

        assistant.message(payload, function(err, data) {
            var returnObject = null;
            if (err) {
                console.error(JSON.stringify(err, null, 2));
                returnObject = res.status(err.code || 500).json(err);
            } else {
                returnObject = res.json(data);
            }
            
            return returnObject;
        });
    }
});

module.exports = router;
