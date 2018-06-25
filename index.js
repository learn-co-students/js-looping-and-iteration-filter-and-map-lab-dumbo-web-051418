// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  // console.log(drivers)
  let revenueOverObj = drivers.filter(function(person) {
    return person.revenue > revenue
  });
  return revenueOverObj;
}


function driverNamesWithRevenueOver(drivers, revenue) {
  let revenueOverObj = driversWithRevenueOver(drivers, revenue);
  return revenueOverObj.map(person => person.name);
}

function exactMatch(drivers, obj) {
  // console.log (Object.keys(obj)[0])
  let attribute = Object.keys(obj)[0]
  let condition = obj[attribute]

  let matchCond = drivers.filter(person => person[attribute] === condition );
  return matchCond;
}

function exactMatchToList(drivers, obj) {
  let matchCond = exactMatch(drivers, obj);
  return matchCond.map(person => person.name);

}
