// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, selection){
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in selection) {
      matches = driver[key] === selection[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, selection){
  return exactMatch(drivers, selection).map(driver => driver.name);
}
