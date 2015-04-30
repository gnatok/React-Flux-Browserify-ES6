'use strict';

import q from 'q';

export default {
	fetch: () => {
		let deferred = q.defer();

		setTimeout(() => {
			deferred.resolve({
				message: "Hello there"
			})
		}, 500)

		return deferred.promise;
	}
}