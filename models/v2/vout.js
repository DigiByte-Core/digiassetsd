exports.models = {
    "vout": {
        "id": "vout",
        "required": ["value", "n", "scriptPubKey"],
        "properties": {
            "value": {
                "type": "integer",
                "format": "int32",
                "description": "value in satoshi"
            },
            "n": {
                "type": "integer",
                "format": "int32",
                "description": "ouput index"
            },
             "scriptPubKey": {
                "type": "scriptPubKey",
                "description": "scriptPubKey"
            }
        }
    }
}