export const meetingStat = {
  "type": "object",
  "properties": {
    "to": { "type": "string", "format": "date-time" },
    "from": { "type": "string", "format": "date-time" },
    "meeting_report_code": { "type": "string" }
  },
  // "additionalProperties": false,
  // "required": []
}


export const signCoordinate = {
  "type": "object",
  "properties": {
    "road_id": { "type": ["number", "string"] },
    "district_id": { "type": ["number", "string"] },
  },
  // "required": ["road_id", "district_id"],
  // "additionalProperties": false,
}


export const signStat = {
  "type": "object",
  "properties": {
    "to": { "type": ["number", "string"] },
    "from": { "type": ["number", "string"] }
  },
  // "additionalProperties": false,
  // "required": ["from", "to"]
}