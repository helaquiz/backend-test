export const addSign = {
  "type": "object",
  "properties": {
    "sign_other_code": { "type": ["number", "string"] },
    "sign_name": { "type": "string", "minLength": 1 },
    "direction": { "type": ["number", "string"], "enum": [1, 2, "1", "2"] },
    "sign_type": { "type": ["number", "string"], "enum": [1, 2, "1", "2"] },
    "lat": { "type": ["number", "string"] },
    "lng": { "type": ["number", "string"] },
    "police_station": {},
    "soi": {},
    "road_id": { "type": ["number", "string"] },
    "district_id": { "type": ["number", "string"] },
    "province_id": { "type": ["number", "string"] },
  },
  // "additionalProperties": false,
  "required": ["sign_name", "direction", "sign_type", "lat", "lng", "road_id", "district_id", "province_id",]
}

// body('sign_other_code', `sign_type doesn't exists`).optional().isString().withMessage('Invalid sign_other_code.'),
// body('sign_name', `sign_name doesn't exists`).exists().isString().withMessage('Invalid sign_name.'),
// body('direction', `direction doesn't exists`).exists().isInt({ min: 1, max: 2 }).withMessage('Invalid direction.'),
// body('sign_type', `sign_type doesn't exists`).exists().isInt({ min: 1, max: 2 }).withMessage('Invalid sign_type.'),
// body('lat', `lat doesn't exists`).exists().isDecimal().withMessage('Invalid lat.'),s
// body('lng', `lng doesn't exists`).exists().isDecimal().withMessage('Invalid lng.'),
// body('police_station', `Invalid lng.`).optional().isString(),
// body('soi', `Invalid soi.`).optional().isString(),
// body('road_id', `province_id doesn't exists`).exists().isInt({ gt: 0 }).withMessage('Invalid province_id.'),
// body('district_id', `district_id doesn't exists`).exists().isInt({ gt: 0 }).withMessage('Invalid district_id.'),
// body('province_id', `province_id doesn't exists`).exists().isInt({ gt: 0 }).withMessage('Invalid province_id.'),
// body('description', `Invalid description.`).optional().isString(),