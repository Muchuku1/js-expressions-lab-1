//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

const day1TempFToC = (day1TempF - 32) * 5 / 9
const day3TempFToC = (day3TempF - 32) * 5 / 9
const day5TempFToC = (day5TempF - 32) * 5 / 9
const day7TempFToC = (day7TempF - 32) * 5 / 9
const day9TempFToC = (day9TempF - 32) * 5 / 9
const day11TempFToC = (day11TempF - 32) * 5 / 9
const day13TempFToC = (day13TempF - 32) * 5 / 9
const day15TempFToC = (day15TempF - 32) * 5 / 9
const day17TempFToC = (day17TempF - 32) * 5 / 9
const day19TempFToC = (day19TempF - 32) * 5 / 9
const day21TempFToC = (day21TempF - 32) * 5 / 9
const day23TempFToC = (day23TempF - 32) * 5 / 9
const day25TempFToC = (day25TempF - 32) * 5 / 9
const day27TempFToC = (day27TempF - 32) * 5 / 9
const day29TempFToC = (day29TempF - 32) * 5 / 9

const day2TempCToF = (day2TempC - 32) * 5 / 9
const day4TempCToF = (day4TempC - 32) * 5 / 9
const day6TempCToF = (day6TempC - 32) * 5 / 9
const day8TempCToF = (day8TempC - 32) * 5 / 9
const day10TempCToF = (day10TempC - 32) * 5 / 9
const day12TempCToF = (day12TempC - 32) * 5 / 9
const day14TempCToF = (day14TempC - 32) * 5 / 9
const day16TempCToF = (day16TempC - 32) * 5 / 9
const day18TempCToF = (day18TempC - 32) * 5 / 9
const day20TempCToF = (day20TempC - 32) * 5 / 9
const day22TempCToF = (day22TempC - 32) * 5 / 9
const day24TempCToF = (day24TempC - 32) * 5 / 9
const day26TempCToF = (day26TempC - 32) * 5 / 9
const day28TempCToF = (day28TempC - 32) * 5 / 9
const day30TempCToF = (day30TempC - 32) * 5 / 9

let tot_temperature_in_celsius;
let tot_temperature_in_fahrenheit;


tot_temperature_in_celsius = (day1TempFToC + day2TempC + day3TempFToC + day4TempC + day5TempFToC + day6TempC + day7TempFToC + 
                            day8TempC + day9TempFToC + day10TempC + day11TempFToC + day12TempC + day13TempFToC + day14TempC + day15TempFToC
                            + day16TempC + day17TempFToC + day18TempC + day19TempFToC + day20TempC + day21TempFToC + day22TempC + day23TempFToC
                            + day24TempC + day25TempFToC + day26TempC + day27TempFToC + day28TempC + day29TempFToC + day30TempC 
)

tot_temperature_in_fahrenheit = (day1TempF + day2TempCToF + day3TempF + day4TempCToF + day5TempF + day6TempCToF + day7TempF + day8TempCToF 
                                        + day9TempF + day10TempCToF + day11TempF + day12TempCToF + day13TempF + day14TempCToF + day15TempF +
                                        day16TempCToF + day17TempF + day18TempCToF + day19TempF + day20TempCToF + day21TempF + day22TempCToF +
                                        day23TempF + day24TempCToF + day25TempF + day26TempCToF + day27TempF + day28TempCToF + day29TempF +
                                        day30TempCToF
)

const avg_temperature_in_celsius = tot_temperature_in_celsius / 30
const avg_temperature_in_farenheit = tot_temperature_in_fahrenheit / 30

console.log(avg_temperature_in_celsius)
console.log(avg_temperature_in_farenheit)

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};