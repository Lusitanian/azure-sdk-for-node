// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z/users?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z/users/NodeSDKTestUser',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '28b5f58b-222c-4319-bf08-3dab11d7074a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z/users/NodeSDKTestUser',
  date: 'Mon, 02 Oct 2017 21:45:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z/users?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z/users/NodeSDKTestUser',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '28b5f58b-222c-4319-bf08-3dab11d7074a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-115883067_1-20171002t213150z/users/NodeSDKTestUser',
  date: 'Mon, 02 Oct 2017 21:45:45 GMT',
  connection: 'close' });
 return result; }]];