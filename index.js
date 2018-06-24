// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) { return driver.revenue > Number.parseInt(revenue); });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) { return driver.name; });
}

function exactMatch(drivers, attributes) {
  return drivers.filter(function(driver) {
    for (const key in attributes) {
        return attributes[key] === driver[key];
    }
  });
}

function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes).map(function(driver) { return driver.name; });
}

// exactMatch()
// returns an array of all matching drivers ‣
// ReferenceError: exactMatch is not defined
//     at Context.<anonymous> (test/indexTest.js:55:7)
// returns an empty array if there is no match ‣
// ReferenceError: exactMatch is not defined
//     at Context.<anonymous> (test/indexTest.js:67:7)
// exactMatchToList()
// returns an array of names for all matching drivers ‣
// ReferenceError: exactMatchToList is not defined
//     at Context.<anonymous> (test/indexTest.js:75:7)
// returns an empty array if there is no match ‣
// ReferenceError: exactMatchToList is not defined
//     at Context.<anonymous> (test/indexTest.js:81:7)
