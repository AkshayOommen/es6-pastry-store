import {Employee} from "./Employee.js";

class Manager extends Employee {
	constructor(name, birthDate, project, manager, allocatedEmployees) {
		super(name, birthDate, project, manager);
		this._allocatedEmployees = allocatedEmployees;
	}

	set allocatedEmployees (allocatedEmployees) {
		this.allocatedEmployees = allocatedEmployees;
	}

	get allocatedEmployees () {
		return this.allocatedEmployees;
	}
}

export {Manager};