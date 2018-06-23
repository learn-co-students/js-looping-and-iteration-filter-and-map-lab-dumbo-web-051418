// Code your solution here:
function driversWithRevenueOver(drivers, value){
  value = parseInt(value)
   return drivers.filter(function(element){
     return element.revenue > value
   })
}

function driverNamesWithRevenueOver(drivers, value){
  value = parseInt(value);
   const list = drivers.filter(function(element){
     return element.revenue > value;
   });
   return list.map(function(element){
     return element.name;
   });
}


function exactMatch (drivers, matcher) {
  return drivers.filter(function(driver) {
    let matches = false;
      for (let key in matcher) {
      matches = driver[key] === matcher[key];
      }
      return matches;
  });
}

function exactMatchToList(drivers, matcher) {
  const matched = exactMatch(drivers, matcher);
    return matched.map(function(driver){
      return driver.name;
    });
}
