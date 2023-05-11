type JSONValue = string | number | boolean | null | JSONObject | JSONValue[];
type JSONObject = {
  [key: string]: JSONValue;
};

export function deepParseJSON(jsonObj: JSONObject): JSONObject {
  const result: JSONObject = {};

  function parseObject(obj: JSONObject, keyPrefix = ''): void {
    Object.entries(obj).forEach(([key, value]: [string, JSONValue]) => {
      const newKey = keyPrefix ? `${keyPrefix}.${key}` : key;

      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (typeof item === 'object' && item !== null) {
            parseObject(item as JSONObject, `${newKey}[${index}]`);
          } else {
            result[`${newKey}[${index}]`] = item;
          }
        });
      } else if (typeof value === 'object' && value !== null) {
        parseObject(value as JSONObject, newKey);
      } else {
        result[newKey] = value;
      }
    });
  }

  parseObject(jsonObj);
  return result;
}
