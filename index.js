let driver = {};


function updateDriverWithKeyAndValue(obj, key, value) {
  const driver = Object.assign({}, obj)
  driver[key] = value 
  return driver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value 
  return driver 
}

function deleteFromDriverByKey(driver, key) {
  const newObj = driver 
  delete newObj[key]
  return newObj
}