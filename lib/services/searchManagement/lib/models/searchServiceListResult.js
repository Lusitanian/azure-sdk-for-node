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

/**
 * @class
 * Initializes a new instance of the SearchServiceListResult class.
 * @constructor
 * Response containing a list of Azure Search services.
 *
 */
class SearchServiceListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SearchServiceListResult
   *
   * @returns {object} metadata of SearchServiceListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SearchServiceListResult',
      type: {
        name: 'Composite',
        className: 'SearchServiceListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SearchServiceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SearchService'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SearchServiceListResult;