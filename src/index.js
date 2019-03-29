// finds and returns case insensitive key
//   useful for getting keys in header objects
//   where key could be 'Content-Type' or 'content-type'

const keyFinder = (obj, key) => {
  const keyList = Object.keys(obj)
  const noCaseKeyList = keyList.map(k => k.toLowerCase())

  const position = noCaseKeyList.indexOf(key.toLowerCase())

  if (position === -1) {
    return undefined
  }

  return keyList[position]
}

module.exports = keyFinder
