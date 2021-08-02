/* eslint-disable no-console */

const employees: string[] = [
  'Alex',
  '',
  'ludmila',
  'Viktor',
  '',
  'oleg',
  'iNna',
  'Ivan',
  'Alex',
  'Olga',
  ' Ann',
]
const employeesNames: string[] = []
const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
}

for (let i = 0; i < employees.length; i += 1) {
  if (employees[i].length > 0 && employees[i].length !== null) {
    employeesNames.push(employees[i])
  }
}

for (let i = 0; i < employeesNames.length; i += 1) {
  employeesNames[i] = employeesNames[i].toLowerCase().trim()
}

function calcCash(own = 0, ...sponsorsCashValue: (string | number)[]) {
  let total = own

  for (let i = 0; i < sponsorsCashValue.length; i += 1) {
    total += +sponsorsCashValue[i]
  }
  return total
}
const money: number = calcCash(null, ...sponsors.cash)

function makeBusiness(
  owner: string,
  director: string = 'Victor',
  cash: number,
  allEmployees: string[]
) {
  const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor']

  console.log(
    `We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employees: ${allEmployees}`
  )
  console.log('And we have a sponsors: ')
  console.log(...sumSponsors)
  console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`)
}

makeBusiness('Sam', undefined, money, employeesNames)
