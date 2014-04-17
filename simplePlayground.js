function AppViewModel() {
	var self = this;

	self.startMessage = ko.observable("This is the header!");
	self.endMessage = ko.observable("This is the footer!");
	
	self.iterateSource = ko.observable("1,2,3,4,5");
	self.iterateList = ko.observableArray();
	ko.computed(function() {
		self.iterateList = [];
		for(value in self.iterateSource().split(",")) {
			self.iterateList.push(value.trim());
		}
	})
	
};

ko.applyBindings(new AppViewModel());
