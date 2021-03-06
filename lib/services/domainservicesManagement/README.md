---
uid: azure-arm-domainservices
summary: *content

---
# Microsoft Azure SDK for Node.js - DomainservicesManagementClient
This project provides a Node.js package for accessing Azure. Right now it supports:
- **Node.js version 6.x.x or higher**

## Features


## How to Install

```bash
npm install azure-arm-domainservices
```

## How to use

### Authentication, client creation and list domainServiceOperations as an example.

```javascript
const msRestAzure = require("ms-rest-azure");
const DomainservicesManagementClient = require("azure-arm-domainservices");
msRestAzure.interactiveLogin().then((creds) => {
    const subscriptionId = "<Subscription_Id>";
    const client = new DomainservicesManagementClient(creds, subscriptionId);
    return client.domainServiceOperations.list().then((result) => {
      console.log("The result is:");
      console.log(result);
    });
}).catch((err) => {
  console.log('An error ocurred:');
  console.dir(err, {depth: null, colors: true});
});

## Related projects

- [Microsoft Azure SDK for Node.js](https://github.com/Azure/azure-sdk-for-node)
