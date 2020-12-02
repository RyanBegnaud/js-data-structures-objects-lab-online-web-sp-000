let driver = {};


function updateDriverWithKeyAndValue(obj, key, value) {
  const driver = Object.assign({}, obj)
  driver[key] = value 
  return driver
}

