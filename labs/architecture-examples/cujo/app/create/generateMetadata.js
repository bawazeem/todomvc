define(function() {

	/**
	 * Since we're using a datastore (localStorage) that doesn't generate ids and such
	 * for us, this transform generates a GUID id and a dateCreated.  It can be
	 * injected into a pipeline for creating new todos.
	 * @param item {Object} data item to which a GUID-lik id and dateCreated fields
	 *  will be added
	 * @return {Object} item, with id an dateCreated fields added
	 */
	return function generateMetadata(item) {
		item.id = guidLike();
		item.dateCreated = new Date().getTime();

		return item;
	};

	// GUID-like generation, not actually a GUID, tho, from:
	// http://stackoverflow.com/questions/7940616/what-makes-this-pseudo-guid-generator-better-than-math-random
	function s4() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}

	function guidLike() {
		return (s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4());
	}

});