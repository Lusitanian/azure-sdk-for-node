/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ApplyArtifactsRequest class.
 * @constructor
 * Request body for applying artifacts to a virtual machine.
 *
 * @member {array} [artifacts] The list of artifacts to apply.
 * 
 */
function ApplyArtifactsRequest() {
}

/**
 * Defines the metadata of ApplyArtifactsRequest
 *
 * @returns {object} metadata of ApplyArtifactsRequest
 *
 */
ApplyArtifactsRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApplyArtifactsRequest',
    type: {
      name: 'Composite',
      className: 'ApplyArtifactsRequest',
      modelProperties: {
        artifacts: {
          required: false,
          serializedName: 'artifacts',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ArtifactInstallPropertiesElementType',
                type: {
                  name: 'Composite',
                  className: 'ArtifactInstallProperties'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ApplyArtifactsRequest;