const coordinateArray = {
  "type": "array",
  "items": [
    { "type": "number" },
    { "type": "number" }
  ],
  "minItems": 2,
}

const insideInnerCoordinates = {
  "type": "array",
  "items": coordinateArray,
  "minItems": 1,
}

const innerCoordinates = {
  "type": "array",
  "items": insideInnerCoordinates,
  "maxItems": 1,
}

const innerCoordinate = {
  "type": "object",
  "properties": {
    "coordinates": innerCoordinates,
    "type": { "type": "string" },
  },
  "required": ["coordinates", "type"]
}

export const addRoad = {
  "type": "object",
  "properties": {
    // "road_code": { "type": "string", "minLength": 1 },
    "road_name_thai": { "type": "string", "minLength": 1 },
    "road_name_eng": {},
    "road_name_old": {},
    "coordinate": innerCoordinate,
  },
  // "required": ["road_code", "road_name_thai", "road_name_eng", "coordinate"]
  "required": ["road_name_thai"]
}

export const editRoad = {
  "type": "object",
  "properties": {
    "road_id": { "type": ["number", "string"] },
    "road_name_thai": {},
    "road_name_eng": {},
    "road_name_old": {},
    "coordinate": innerCoordinate,
    "road_status": { "type": ["number", "string"], "enum": [0, 1, "0", "1", ""] }
  },
  // "additionalProperties": false,
  "required": ["road_id"]
}
