// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const array = drivers.filter(function(drv) {
  return drv.revenue > revenue

  })
  return array
}


function driverNamesWithRevenueOver(drivers, revenue) {
    const array = (driversWithRevenueOver(drivers, revenue)).map(function(driver) {
      return driver.name
    })
  return array
}

function exactMatch(drivers, object) {
  const key = Object.keys(object)[0]
  const array = drivers.filter(function(driver) {
    return driver[key] === object[key]
  })
   return array
}

function exactMatchToList(drivers, object) {
  return array = (exactMatch(drivers, object)).map(function(driver) {
    return driver.name
  })
}
