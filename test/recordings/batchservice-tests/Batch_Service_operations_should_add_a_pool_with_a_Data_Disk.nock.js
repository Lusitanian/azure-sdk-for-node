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
.post('/pools?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 22:00:54 GMT',
  etag: '0x8D509E10D699D58',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkdatadiskpool',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e790c98b-186c-493c-93ec-699c0409d9ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkdatadiskpool',
  date: 'Mon, 02 Oct 2017 22:00:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 22:00:54 GMT',
  etag: '0x8D509E10D699D58',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkdatadiskpool',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e790c98b-186c-493c-93ec-699c0409d9ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkdatadiskpool',
  date: 'Mon, 02 Oct 2017 22:00:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdkdatadiskpool?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools/@Element\",\"id\":\"nodesdkdatadiskpool\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkdatadiskpool\",\"eTag\":\"0x8D509E10D699D58\",\"lastModified\":\"2017-10-02T22:00:54.0110168Z\",\"creationTime\":\"2017-10-02T22:00:54.0110168Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-10-02T22:00:54.0110168Z\",\"allocationState\":\"resizing\",\"allocationStateTransitionTime\":\"2017-10-02T22:00:54.0110168Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":0,\"targetDedicatedNodes\":0,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"virtualMachineConfiguration\":{\r\n    \"imageReference\":{\r\n      \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n    },\"nodeAgentSKUId\":\"batch.node.ubuntu 16.04\",\"dataDisks\":[\r\n      {\r\n        \"lun\":1,\"caching\":\"none\",\"diskSizeGB\":50,\"storageAccountType\":\"standard_lrs\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 02 Oct 2017 22:00:54 GMT',
  etag: '0x8D509E10D699D58',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '92e20046-f0ee-4e7f-b441-e85e90d2f4bf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 22:00:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdkdatadiskpool?api-version=2017-09-01.6.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools/@Element\",\"id\":\"nodesdkdatadiskpool\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkdatadiskpool\",\"eTag\":\"0x8D509E10D699D58\",\"lastModified\":\"2017-10-02T22:00:54.0110168Z\",\"creationTime\":\"2017-10-02T22:00:54.0110168Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-10-02T22:00:54.0110168Z\",\"allocationState\":\"resizing\",\"allocationStateTransitionTime\":\"2017-10-02T22:00:54.0110168Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":0,\"targetDedicatedNodes\":0,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"virtualMachineConfiguration\":{\r\n    \"imageReference\":{\r\n      \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n    },\"nodeAgentSKUId\":\"batch.node.ubuntu 16.04\",\"dataDisks\":[\r\n      {\r\n        \"lun\":1,\"caching\":\"none\",\"diskSizeGB\":50,\"storageAccountType\":\"standard_lrs\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 02 Oct 2017 22:00:54 GMT',
  etag: '0x8D509E10D699D58',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '92e20046-f0ee-4e7f-b441-e85e90d2f4bf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 22:00:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/pools/nodesdkdatadiskpool?api-version=2017-09-01.6.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '16d655e7-014f-4f8e-b564-76c40676b22a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 22:00:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .delete('/pools/nodesdkdatadiskpool?api-version=2017-09-01.6.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '16d655e7-014f-4f8e-b564-76c40676b22a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 22:00:55 GMT',
  connection: 'close' });
 return result; }]];