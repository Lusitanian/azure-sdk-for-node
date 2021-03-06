// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files?api-version=2018-03-01.6.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"applications\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files/applications\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"shared\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files/shared\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"startup\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files/startup\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"workitems\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files/workitems\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '200d0573-69aa-44d8-99e6-4260e3633295',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 09 Mar 2018 23:03:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files?api-version=2018-03-01.6.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"applications\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files/applications\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"shared\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files/shared\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"startup\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files/startup\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"workitems\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3840119875_3-20180309t224543z/files/workitems\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '200d0573-69aa-44d8-99e6-4260e3633295',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 09 Mar 2018 23:03:04 GMT',
  connection: 'close' });
 return result; }]];