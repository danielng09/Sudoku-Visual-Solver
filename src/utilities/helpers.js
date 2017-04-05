/**
* @param {String} string
*/
export default function humanize(string) {
  return string.replace(/([A-Z])/g, ' $1')
               .replace(/^./, function(subString){ return subString.toUpperCase(); })
               .trim()
}
