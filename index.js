const client = require('@sendgrid/client');
client.setApiKey(process.env.SENDGRID_API_KEY);

const body = {
  email : "sendgridtest@live.com"
}

const data = {
  contacts: [{
      email: body.email,
  }]
};

const request = {
  url: `/v3/marketing/contacts`,
  method: 'PUT',
  body: JSON.stringify(data)
}

client.request(request)
  .then(([response, body]) => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });