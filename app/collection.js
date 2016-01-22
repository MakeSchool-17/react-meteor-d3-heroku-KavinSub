Hours = new Meteor.Collection("Hours")

Meteor.methods({
	insertHour: function(hours, date){
		var hoursNum = parseInt(hours);

		check(hoursNum, Number)
		check(date, Date)

		return Hours.insert({
			hours: hours,
			date: date
		});
	},

	removeHour: function(id){
		check(id, String)
		return Hours.remove(id);
	}
});