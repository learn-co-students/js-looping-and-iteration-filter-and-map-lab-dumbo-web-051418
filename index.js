// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function(driver){
    return driver['revenue'] > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return drivers.filter(function(driver){
    return driver['revenue'] > revenue;
  }).map(function(obj){
    return obj['name'];
  });
}

function exactMatch (drivers, attribute) {
  const key = Object.keys(attribute)[0];
  return drivers.filter(function(driver) {
    return driver[key] === attribute[key];
  });
}

function exactMatchToList (drivers, attribute) {
  const key = Object.keys(attribute)[0];
  return drivers.filter(function(driver) {
    return driver[key] === attribute[key];
  }).map(function(obj) {
    return obj['name'];
  });
}
