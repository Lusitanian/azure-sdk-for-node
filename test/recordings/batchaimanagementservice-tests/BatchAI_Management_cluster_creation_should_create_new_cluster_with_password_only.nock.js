// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westeurope';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/clusters/cluster7?api-version=2018-03-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationstatuses/8c592a90-b10d-4b3d-ab85-aac778d540b0?api-version=2018-03-01',
  'retry-after': '15',
  'request-id': '261b0d37-4b7d-417b-9f87-26ad28895f90',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c592a90-b10d-4b3d-ab85-aac778d540b0?api-version=2018-03-01',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'e948febc-2deb-492f-9776-0cab4cccd0df',
  'x-ms-correlation-request-id': 'e948febc-2deb-492f-9776-0cab4cccd0df',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004059Z:e948febc-2deb-492f-9776-0cab4cccd0df',
  date: 'Fri, 16 Mar 2018 00:40:58 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/clusters/cluster7?api-version=2018-03-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationstatuses/8c592a90-b10d-4b3d-ab85-aac778d540b0?api-version=2018-03-01',
  'retry-after': '15',
  'request-id': '261b0d37-4b7d-417b-9f87-26ad28895f90',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c592a90-b10d-4b3d-ab85-aac778d540b0?api-version=2018-03-01',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'e948febc-2deb-492f-9776-0cab4cccd0df',
  'x-ms-correlation-request-id': 'e948febc-2deb-492f-9776-0cab4cccd0df',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004059Z:e948febc-2deb-492f-9776-0cab4cccd0df',
  date: 'Fri, 16 Mar 2018 00:40:58 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c592a90-b10d-4b3d-ab85-aac778d540b0?api-version=2018-03-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c592a90-b10d-4b3d-ab85-aac778d540b0\",\"name\":\"8c592a90-b10d-4b3d-ab85-aac778d540b0\",\"status\":\"Succeeded\",\"startTime\":\"2018-03-16T00:40:59.029Z\",\"endTime\":\"2018-03-16T00:40:59.514Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup4060$cluster7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '428',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'request-id': 'aa048568-1138-4eda-a5e0-3d7b617267fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '50c7757f-4478-4e78-a6d9-47ba4a0e65ec',
  'x-ms-correlation-request-id': '50c7757f-4478-4e78-a6d9-47ba4a0e65ec',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004130Z:50c7757f-4478-4e78-a6d9-47ba4a0e65ec',
  date: 'Fri, 16 Mar 2018 00:41:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c592a90-b10d-4b3d-ab85-aac778d540b0?api-version=2018-03-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/westeurope/operationresults/8c592a90-b10d-4b3d-ab85-aac778d540b0\",\"name\":\"8c592a90-b10d-4b3d-ab85-aac778d540b0\",\"status\":\"Succeeded\",\"startTime\":\"2018-03-16T00:40:59.029Z\",\"endTime\":\"2018-03-16T00:40:59.514Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup4060$cluster7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '428',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'request-id': 'aa048568-1138-4eda-a5e0-3d7b617267fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '50c7757f-4478-4e78-a6d9-47ba4a0e65ec',
  'x-ms-correlation-request-id': '50c7757f-4478-4e78-a6d9-47ba4a0e65ec',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004130Z:50c7757f-4478-4e78-a6d9-47ba4a0e65ec',
  date: 'Fri, 16 Mar 2018 00:41:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/clusters/cluster7?api-version=2018-03-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/clusters/cluster7\",\"name\":\"cluster7\",\"type\":\"Microsoft.BatchAI/Clusters\",\"location\":\"westeurope\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-03-16T00:40:59.014Z\",\"allocationStateTransitionTime\":\"2018-03-16T00:41:00.075Z\",\"provisioningStateTransitionTime\":\"2018-03-16T00:40:59.482Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '917',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 16 Mar 2018 00:40:59 GMT',
  etag: '"0x8D58AD6962FCB3E"',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'request-id': 'af3d2eee-dd48-45be-8328-8d9ae1d1d82e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3a532e46-4f9b-4668-994d-f9b1e125526c',
  'x-ms-correlation-request-id': '3a532e46-4f9b-4668-994d-f9b1e125526c',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004131Z:3a532e46-4f9b-4668-994d-f9b1e125526c',
  date: 'Fri, 16 Mar 2018 00:41:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/clusters/cluster7?api-version=2018-03-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/clusters/cluster7\",\"name\":\"cluster7\",\"type\":\"Microsoft.BatchAI/Clusters\",\"location\":\"westeurope\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-03-16T00:40:59.014Z\",\"allocationStateTransitionTime\":\"2018-03-16T00:41:00.075Z\",\"provisioningStateTransitionTime\":\"2018-03-16T00:40:59.482Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '917',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 16 Mar 2018 00:40:59 GMT',
  etag: '"0x8D58AD6962FCB3E"',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'request-id': 'af3d2eee-dd48-45be-8328-8d9ae1d1d82e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3a532e46-4f9b-4668-994d-f9b1e125526c',
  'x-ms-correlation-request-id': '3a532e46-4f9b-4668-994d-f9b1e125526c',
  'x-ms-routing-request-id': 'WESTUS2:20180316T004131Z:3a532e46-4f9b-4668-994d-f9b1e125526c',
  date: 'Fri, 16 Mar 2018 00:41:30 GMT',
  connection: 'close' });
 return result; }]];