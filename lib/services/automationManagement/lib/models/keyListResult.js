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
 * Class representing a KeyListResult.
 */
class KeyListResult extends Array {
  /**
   * Create a KeyListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of KeyListResult
   *
   * @returns {object} metadata of KeyListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyListResult',
      type: {
        name: 'Composite',
        className: 'KeyListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'KeyElementType',
                  type: {
                    name: 'Composite',
                    className: 'Key'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = KeyListResult;
