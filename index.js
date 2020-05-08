
const request = require('request');
request.post(process.env.TRUSTIFI_URL + '/api/i/v1/email', {
   headers: {
    'x-trustifi-key': process.env.TRUSTIFI_KEY,
    'x-trustifi-secret': process.env.TRUSTIFI_SECRET
  },
   json: {
  "title": "שddons test",
  "html": "Body",
  "recipients": [{"email": "mmizrahitest@outlook.com", "name": "test", "phone":{"country_code":"+1","phone_number":"1111111111"}}],
  "lists": [],
  "contacts": [],
  "attachments": [],
  "methods": { 
    "postmark": false,
    "secureSend": false,
    "encryptContent": false,
    "secureReply": false 
  }
}
}, (err, res, body) => {
   console.log(body);
})
