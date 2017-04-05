import * as ALGORITHMS from "../models/algorithms";

/**
* @param {String} string
*/
function classify(string) {
  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) { return ""; } // or if (/\s+/.test(match)) for white spaces
    return match.toUpperCase();
  });
}

/**
* @param {String} name
*/
export default function getMatchingAlgorithm(name) {
  return ALGORITHMS[classify(name)];
}
