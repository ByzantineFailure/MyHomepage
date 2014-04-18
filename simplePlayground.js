function AppViewModel() {
	var self = this;

	self.iterateSource = ko.observable("1, 2, 3, 4, 5");
	self.iterateList = ko.observableArray();

	self.listUpdater = ko.computed(function() {
		ret = [];
		splitResult = self.iterateSource().split(",");
		self.iterateList.removeAll()
		for(i = 0; i < splitResult.length; i++) {
			self.iterateList.push(splitResult[i]);
		}
	});

};

ko.applyBindings(new AppViewModel());

