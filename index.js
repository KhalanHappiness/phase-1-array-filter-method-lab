// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];


function findMatching(drivers, name ){

    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())

}

// console.log(findMatching(drivers, 'Sammy'))

function fuzzyMatch(drivers, letter ){

    return drivers.filter(driverName => driverName.slice(0,2) === letter)

}

console.log(fuzzyMatch(drivers, 'Sa'))

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(driver, Dname){

    return driver.filter(driverDetails => driverDetails.name === Dname)

}
console.log(driver, "Annette")