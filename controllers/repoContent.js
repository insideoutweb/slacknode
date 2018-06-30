var request = require('request');
// To get the Token 
exports.slacktok = (req, res) => {
var options = { method: 'POST',
  url: 'https://slack.com/api/oauth.access',
  headers: 
   { 'Postman-Token': 'cb04713d-1520-47e3-8a5e-f6911da62930',
     'Cache-Control': 'no-cache',
     code: '372028459318.391735037798.d0f9db17db9d7defdadfc616ae78b96439dab8f0457a66528056111b0672c235',
     client_secret: '7a0e4a0f561b5691e4c9efaa45ac0953',
     client_id: '372028459318.370611099329',
     'Content-Type': 'application/x-www-form-urlencoded' },
  form: 
   { client_id: '372028459318.370611099329',
     client_secret: '7a0e4a0f561b5691e4c9efaa45ac0953',
     code: '372028459318.391735037798.d0f9db17db9d7defdadfc616ae78b96439dab8f0457a66528056111b0672c235' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
};
// To Get the UserName 
exports.slackUser = (req, res) => {
var options = { method: 'POST',
  url: 'https://slack.com/api/auth.test',
  headers: 
   { 'Postman-Token': 'bc58a695-18e1-4b85-b45b-f5c5345249a3',
     'Cache-Control': 'no-cache',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: { token: 'xoxp-372028459318-370592480753-371293715221-5fdb5362f677734f7a3196e7b2a436f9' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
};

