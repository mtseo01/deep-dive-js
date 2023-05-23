const obj = {
  name: 'kim',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis'],
};

const json = JSON.stringify(obj);
console.log(typeof json, json); // string {"name":"kim","age":20,"alive":true,"hobby":["traveling","tennis"]}

const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
/*
string {
  "name": "kim",
  "age": 20,
  "alive": true,
  "hobby": [
    "traveling",
    "tennis"
  ]
}
*/
