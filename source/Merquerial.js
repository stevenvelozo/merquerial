let libConsoleQuery = require('./Console-Query.js');

class Merquerial
{
	constructor()
	{
		this.Questions = [];

		this.Questions.push(new libConsoleQuery({Question:'Do you like olives?'}));
		this.Questions.push(new libConsoleQuery({Question:'Who is your daddy?', Type:'String'}));
		this.Questions.push(new libConsoleQuery({Question:'Do you like bears?'}));
		this.Questions.push(new libConsoleQuery({Question:'Do you like children?'}));
	}

	async Execute()
	{
		for (let i = 0; i < this.Questions.length; i++)
		{
			await this.Questions[i].ExecutePromise();
		}
	}
}

module.exports = Merquerial;