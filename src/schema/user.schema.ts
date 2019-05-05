export const createUser = {
  "type": "object",
  "properties": {
    "username": { "type": "string", "minLength": 1 },
    "password": { "type": "string", "minLength": 4 },
    "firstname": { "type": "string" },
    "lastname": { "type": "string" },
    "permission": { "type": ["number", "string"] },
    "citizen_id": { "type": "string", "minLength": 13, "maxLength": 13 }
  },
  "required": ["username", "password", "firstname", "lastname", "permission", "citizen_id"],
  // "additionalProperties": false,
}


export const editUser = {
  "type": "object",
  "properties": {
    "user_id": { "type": ["number", "string"] },
    // "password": { "type": "string", "minLength": 4 },
    // "confirmpassword": { "type": "string", "minLength": 4 },
    "citizen_id": { "type": "string", "maxLength": 13 },
    "firstname": { "type": "string" },
    "lastname": { "type": "string" },
    "permission": { "type": ["number", "string"] },
    "is_active": { "type": ["number", "string"], "enum": [0, 1, "0", "1", ""] }
  },
  // "required": ["username", "password", "firstname", "lastname", "permission"],
  // "additionalProperties": false,
}