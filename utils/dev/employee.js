const faker = require ('faker')
function generateEmployees () {
  let employee = []
  for (let id = 0; id <50; id ++) {
    const firstName = faker.name.firstName ()
    const lastName = faker.name.lastName ()
    const email = faker.internet.email ()
    employee.push ({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    })
  }
  return {"Employee": employee}
}
module.exports = generateEmployees