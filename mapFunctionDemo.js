// Create a Map by passing an Array of key-value pairs to the Map constructor
const arrayMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);
 
// Accessing values in the Map
console.log(arrayMap.get('key1'));  // Output: "value1"
console.log(arrayMap.get('key2'));  // Output: "value2"
console.log(arrayMap.get('key3'));  // Output: "value3"