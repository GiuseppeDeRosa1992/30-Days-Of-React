class Parent {
    constructor(firstName, lastName, languageUsed, date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.languageUsed = languageUsed;
        this.date = date;
    }

    getPersonInfo() {
        return '${this.firstName} ${this.lastName} usa i seguenti linguaggi ${this.languageUsed} nato il giorno ${this.date}'
    }

    getParentMethid() {

    }
}

class Child extends Parent {
    constructor(firstName, lastName, languageUsed, date, techs) {
        super(firstName, lastName, languageUsed, date)
        this.techs = techs
        // we bind the child params with the this keyword to this child object
    }
    gettechs() {
        let tech = this.techs.length
        return tech > 0 ? this.techs.join(' ') : 'No skills found'
    }
    childMethod() {
        // code goes here
    }
}