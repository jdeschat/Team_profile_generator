const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor here:
        super(name, id, email);

        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;