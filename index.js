const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const axios = require('axios');

const bizSdk = require('facebook-nodejs-business-sdk');
const accessToken = 'your-access-token';
const accountId = 'act_{your-adaccount-id}';

const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;

const account = new AdAccount(accountId);

// const dummyDb = require('./db/db');

var campaigns;

var AdWords = require('googleads-node-lib');

console.log("DATABASE");

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(typeof response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });


// console.log(dummyDb);


// account.read([AdAccount.Fields.name])
//   .then((account) =>{
//     return account.getCampaigns([Campaign.Fields.name], { limit: 10 }) // fields array and params
//   })
//   .then((result) =>{
//     campaigns = result
//     campaigns.forEach((campaign) =>console.log(campaign.name))  
//   }).catch(console.error);

// axios.get('/', {
//   cancelToken: source.token
// }).catch(function (thrown) {
//   if (axios.isCancel(thrown)) {
//     console.log('Request canceled', thrown.message);
//   } else {
//     // handle error
//   }
// });

// axios.post('https://safe-shore-59113.herokuapp.com/instapage', {
// 	firstName: 'Fred',
// 	lastName: 'Flintstone'
//   })
//   .then(function (response) {
// 	console.log(response);
//   })
//   .catch(function (error) {
// 	console.log(error);
//   });

app.get('/instapage', (req, res) => {
  console.log("REGISTERING GET");
  console.log("button clicked get / instapage");
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: event.target.href
  });
	res.status(200).send({
		success: 'true',
		message: 'todos retrieved successfully'
	})
});

app.post('/instapage', (req, res) => {
  console.log("REGISTERING POST");
  console.log("button clicked post / instapage");
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: event.target.href
  });
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully'
  })
});

// axios.get('https://safe-shore-59113.herokuapp.com/')

// axios.post('https://safe-shore-59113.herokuapp.com/instapage')
 
// var Service = new AdWords.ManagedCustomerService({
//   ADWORDS_CLIENT_ID: 'your client id',
//   ADWORDS_CLIENT_CUSTOMER_ID: 'your client customer id',
//   ADWORDS_DEVELOPER_TOKEN: 'your developer token'
//   ADWORDS_REFRESH_TOKEN: 'your refresh token',
//   ADWORDS_SECRET: 'your secret',
//   ADWORDS_USER_AGENT: 'your user agent',
// });
 
// var service = new AdWords.AdGroupService();
// var clientCustomerId = 'the client customer ID you are interested in';

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`));

