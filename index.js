// Code your solution here:
function driversWithRevenueOver(array, revenueAmt) {
  return array.filter((element) => {
    return element.revenue > revenueAmt
  })
};

function driverNamesWithRevenueOver(array, revenueAmt) {
  const drivers = driversWithRevenueOver(array, revenueAmt)
  return drivers.map((element) => {
    return element.name
  })
};

function exactMatch(arrayOfObjects, specifyingObject) {
  function matchConditions(condition) {
    return arrayOfObjects.filter((element) => {
      return element[`${condition}`] === specifyingObject[`${condition}`]
    })
  }
  if (!!specifyingObject.name) {
    return matchConditions(`name`)
  } else if (!!specifyingObject.revenue) {
    return matchConditions(`revenue`)
  }
};

function exactMatchToList(arrayOfObjects, specifyingObject) {
  const matchedObjects = exactMatch(arrayOfObjects, specifyingObject)
  return matchedObjects.map((element) => {
    return element.name
  })
};
