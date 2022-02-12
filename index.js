const sdk = require('api')('@opensea/v1.0#dyu8zkzh9hve9'); // https://docs.opensea.io/reference/retrieving-asset-events
//const sdk = require('api')('@opensea/v1.0#1j3wv35kyd6wqwc'); // https://docs.opensea.io/reference/retrieving-events-testnets
require('dotenv').config();

sdk.auth(process.env.OPENSEA_API_KEY);
//sdk.auth(process.env.OPENSEA_API_KEY_TEST);

sdk['retrieving-asset-events']({
//sdk['retrieving-events-testnets']({
  collection_slug: 'running-lights-randomness',
  only_opensea: 'false'
})
  .then(res => {
      console.log(res.asset_events[0].asset)
  })
  .catch(err => console.log("err", err));