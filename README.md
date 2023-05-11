# Deep Parse JSON

A simple utility to parse deeply nested JSON objects and return a new JSON object with flattened key-value pairs.

## Installation

Using npm:

```sh
npm install dp-json

or

yarn add dp-json

```

## Usage

```
import { deepParseJSON } from 'dp-json';

// const {deepParseJSON} = require('dp-json') or use for commonjs
```


```
const json = {
    "level1": {
      "level2a": {
        "level3a": {
          "level4a": {
            "key1": "value1"
          },
          "key2": 10
        },
        "level3b": {
          "key3": "value3"
        }
      },
      "level2b": {
        "key4": "value4",
        "level3c": {
          "key5": "value5",
          "level4b": {
            "key6": false
          }
        }
      }
    },
    "key7": "value7"
  }

const parse = deepParseJSON(json)
console.log(parse)
```

## Output 

``` 
{
    'level1.level2a.level3a.level4a.key1': 'value1',
    'level1.level2a.level3a.key2': 10,
    'level1.level2a.level3b.key3': 'value3',
    'level1.level2b.key4': 'value4',
    'level1.level2b.level3c.key5': 'value5',
    'level1.level2b.level3c.level4b.key6': false,
    key7: 'value7'
  }

```

