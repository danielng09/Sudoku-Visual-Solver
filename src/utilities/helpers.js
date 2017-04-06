import * as ALGORITHMS from "../models/algorithms";
import { BASE_TIMEOUT } from "./boardConstants";


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
export function getMatchingAlgorithm(name) {
  return ALGORITHMS[classify(name)];
}

/**
* @param {Number} speed
*/
export function getTimeout(speed) {
  return Math.round(BASE_TIMEOUT / speed)
}
