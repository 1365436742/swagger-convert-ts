function mergeAllOf(schemas, allOfArray) {
    return allOfArray.reduce((acc, item) => {
        if (item?.$ref) {
            const refSchema = schemas[item?.$ref];
            return { ...acc, ...refSchema, ...item };
        }
        return { ...acc, ...item };
    }, {});
}

const jsonSchemaTypeMapMockjs = (property) => {
    switch (property.type) {
        case 'integer':
            return '@integer(1, 100)';
        case 'string':
            if (property.format === 'email') {
                return '@EMAIL';
            } else if (property.enum) {
                return property.enum[0];  // Choose first enum value as example
            } else {
                return '@string';
            }
        case 'boolean':
            return '@boolean';
        case 'array':
            return {
                "array|1-10": [
                    {}
                ]
            };
        default:
            return '@string';
    }
}

function convertSchemaToMock(schemas) {
    const mock = {};
    const convertSchema = (schema, name) => {
        const { properties, allOf, $ref } = schema;
        let currentMockInfo = {}
        if (properties) {
            for (const key in properties) {
                const property = properties[key];
                currentMockInfo[key] = jsonSchemaTypeMapMockjs(property)
            }
        } else if ($ref) {
            currentMockInfo = convertSchema(schemas[$ref])
        } else if (allOf?.length > 0) {
            allOf.map(item => {
                console.log(schema, name, convertSchema(item), "xxxx")
                currentMockInfo = convertSchema(item)
            })
        }
        return currentMockInfo
    }
    for (const [name, schema] of Object.entries(schemas)) {
        mock[name] = convertSchema(schema, name)
    }
    // return mock
}

console.log(convertSchemaToMock({
    "HH": {
        "$ref": "Item"
    },
    "DeleteItemBody": {
        "title": "DeleteItemBody",
        "type": "object",
        "properties": {
            "listItems": {
                "type": "array",
                "description": "删除列表内容",
                "items": {
                    "allOf": [
                        {
                            "$ref": "Item"
                        },
                        {
                            "type": "object",
                            "properties": {
                                "_type": {
                                    "type": "string",
                                    "enum": [
                                        "items"
                                    ]
                                }
                            }
                        }
                    ]
                }
            },
            "name": {
                "type": "string"
            },
            "text": {
                "type": "string"
            }
        },
        "additionalProperties": false
    },
    "Item": {
        "title": "Item",
        "type": "object",
        "properties": {
            "number": {
                "type": "integer",
                "format": "int32"
            },
            "text": {
                "type": "string"
            }
        },
        "additionalProperties": false
    },
    "ItemBody": {
        "title": "ItemBody",
        "type": "object",
        "properties": {
            "listItems": {
                "type": "array",
                "items": {
                    "allOf": [
                        {
                            "$ref": "Item"
                        },
                        {
                            "type": "object",
                            "properties": {
                                "_type": {
                                    "type": "string",
                                    "enum": [
                                        "items"
                                    ]
                                }
                            }
                        }
                    ]
                }
            },
            "name": {
                "type": "string",
                "description": "名称"
            },
            "text": {
                "type": "string",
                "description": "描述"
            }
        },
        "additionalProperties": false
    },
    "DeleteRequestBodyListItemsUsingDELETEParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            }
        },
        "require": [
            "length"
        ],
        "additionalProperties": false
    },
    "DeleteRequestBodyListItemsUsingDELETEBody": {
        "allOf": [
            {
                "$ref": "DeleteItemBody"
            },
            {
                "type": "object",
                "properties": {
                    "_type": {
                        "type": "string",
                        "enum": [
                            "DeleteRequestBodyListItemsUsingDELETEBody"
                        ]
                    }
                }
            }
        ]
    },
    "DeleteRequestBodyListItemsUsingDELETEResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "DeleteItemBody"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "DeleteRequestSearchItemsUsingDELETEParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            },
            "query": {
                "type": "integer",
                "format": "int32"
            },
            "text": {
                "type": "string"
            }
        },
        "require": [
            "length",
            "query",
            "text"
        ],
        "additionalProperties": false
    },
    "DeleteRequestSearchItemsUsingDELETEResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "Item"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "DeleteRequestGetUserByIdUsingDELETEParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            }
        },
        "require": [
            "id"
        ],
        "additionalProperties": false
    },
    "DeleteRequestGetUserByIdUsingDELETEResponses": {
        "type": "string"
    },
    "DeleteRequestGetUserByIdsUsingDELETEParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            },
            "spanceId": {
                "type": "string"
            }
        },
        "require": [
            "id",
            "spanceId"
        ],
        "additionalProperties": false
    },
    "DeleteRequestGetUserByIdsUsingDELETEResponses": {
        "type": "string"
    },
    "GetRequestBodyListItemsUsingGETParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            }
        },
        "require": [
            "length"
        ],
        "additionalProperties": false
    },
    "GetRequestBodyListItemsUsingGETBody": {
        "allOf": [
            {
                "$ref": "ItemBody"
            },
            {
                "type": "object",
                "properties": {
                    "_type": {
                        "type": "string",
                        "enum": [
                            "GetRequestBodyListItemsUsingGETBody"
                        ]
                    }
                }
            }
        ]
    },
    "GetRequestBodyListItemsUsingGETResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "ItemBody"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "PutRequestBodyListItemsUsingPUTParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            }
        },
        "require": [
            "length"
        ],
        "additionalProperties": false
    },
    "PutRequestBodyListItemsUsingPUTBody": {
        "allOf": [
            {
                "$ref": "ItemBody"
            },
            {
                "type": "object",
                "properties": {
                    "_type": {
                        "type": "string",
                        "enum": [
                            "PutRequestBodyListItemsUsingPUTBody"
                        ]
                    }
                }
            }
        ]
    },
    "PutRequestBodyListItemsUsingPUTResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "ItemBody"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "PostRequestBodyListItemsUsingPOSTParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            }
        },
        "require": [
            "length"
        ],
        "additionalProperties": false
    },
    "PostRequestBodyListItemsUsingPOSTBody": {
        "allOf": [
            {
                "$ref": "ItemBody"
            },
            {
                "type": "object",
                "properties": {
                    "_type": {
                        "type": "string",
                        "enum": [
                            "PostRequestBodyListItemsUsingPOSTBody"
                        ]
                    }
                }
            }
        ]
    },
    "PostRequestBodyListItemsUsingPOSTResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "ItemBody"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "PatchRequestBodyListItemsUsingPATCHParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            }
        },
        "require": [
            "length"
        ],
        "additionalProperties": false
    },
    "PatchRequestBodyListItemsUsingPATCHBody": {
        "allOf": [
            {
                "$ref": "ItemBody"
            },
            {
                "type": "object",
                "properties": {
                    "_type": {
                        "type": "string",
                        "enum": [
                            "PatchRequestBodyListItemsUsingPATCHBody"
                        ]
                    }
                }
            }
        ]
    },
    "PatchRequestBodyListItemsUsingPATCHResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "ItemBody"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "GetRequestSearchItemsUsingGETParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            },
            "query": {
                "type": "integer",
                "format": "int32"
            },
            "text": {
                "type": "string"
            }
        },
        "require": [
            "length",
            "query",
            "text"
        ],
        "additionalProperties": false
    },
    "GetRequestSearchItemsUsingGETResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "Item"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "PutRequestSearchItemsUsingPUTParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            },
            "query": {
                "type": "integer",
                "format": "int32"
            },
            "text": {
                "type": "string"
            }
        },
        "require": [
            "length",
            "query",
            "text"
        ],
        "additionalProperties": false
    },
    "PutRequestSearchItemsUsingPUTResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "Item"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "PostRequestSearchItemsUsingPOSTParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            },
            "query": {
                "type": "integer",
                "format": "int32"
            },
            "text": {
                "type": "string"
            }
        },
        "require": [
            "length",
            "query",
            "text"
        ],
        "additionalProperties": false
    },
    "PostRequestSearchItemsUsingPOSTResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "Item"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "PatchRequestSearchItemsUsingPATCHParams": {
        "type": "object",
        "properties": {
            "length": {
                "type": "integer",
                "format": "int32"
            },
            "query": {
                "type": "integer",
                "format": "int32"
            },
            "text": {
                "type": "string"
            }
        },
        "require": [
            "length",
            "query",
            "text"
        ],
        "additionalProperties": false
    },
    "PatchRequestSearchItemsUsingPATCHResponses": {
        "type": "array",
        "items": {
            "allOf": [
                {
                    "$ref": "Item"
                },
                {
                    "type": "object",
                    "properties": {
                        "_type": {
                            "type": "string",
                            "enum": [
                                "items"
                            ]
                        }
                    }
                }
            ]
        }
    },
    "GetRequestGetUserByIdUsingGETParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            }
        },
        "require": [
            "id"
        ],
        "additionalProperties": false
    },
    "GetRequestGetUserByIdUsingGETResponses": {
        "type": "string"
    },
    "PutRequestGetUserByIdUsingPUTParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            }
        },
        "require": [
            "id"
        ],
        "additionalProperties": false
    },
    "PutRequestGetUserByIdUsingPUTResponses": {
        "type": "string"
    },
    "PostRequestGetUserByIdUsingPOSTParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            }
        },
        "require": [
            "id"
        ],
        "additionalProperties": false
    },
    "PostRequestGetUserByIdUsingPOSTResponses": {
        "type": "string"
    },
    "PatchRequestGetUserByIdUsingPATCHParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            }
        },
        "require": [
            "id"
        ],
        "additionalProperties": false
    },
    "PatchRequestGetUserByIdUsingPATCHResponses": {
        "type": "string"
    },
    "GetRequestGetUserByIdsUsingGETParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            },
            "spanceId": {
                "type": "string"
            }
        },
        "require": [
            "id",
            "spanceId"
        ],
        "additionalProperties": false
    },
    "GetRequestGetUserByIdsUsingGETResponses": {
        "type": "string"
    },
    "PutRequestGetUserByIdsUsingPUTParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            },
            "spanceId": {
                "type": "string"
            }
        },
        "require": [
            "id",
            "spanceId"
        ],
        "additionalProperties": false
    },
    "PutRequestGetUserByIdsUsingPUTResponses": {
        "type": "string"
    },
    "PostRequestGetUserByIdsUsingPOSTParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            },
            "spanceId": {
                "type": "string"
            }
        },
        "require": [
            "id",
            "spanceId"
        ],
        "additionalProperties": false
    },
    "PostRequestGetUserByIdsUsingPOSTResponses": {
        "type": "string"
    },
    "PatchRequestGetUserByIdsUsingPATCHParams": {
        "type": "object",
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64"
            },
            "spanceId": {
                "type": "string"
            }
        },
        "require": [
            "id",
            "spanceId"
        ],
        "additionalProperties": false
    },
    "PatchRequestGetUserByIdsUsingPATCHResponses": {
        "type": "string"
    }
}))