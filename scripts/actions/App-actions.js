'use strict';

import AppDispatcher from '../dispatchers/App-dispatcher.js';
import AppConstants from '../constants/App-constants.js';
import AppSlave from '../slaves/App-slave.js';

export default {
	fetch: () => {
		AppSlave.fetch().then((data) => {
			AppDispatcher.handleAction({
				type: AppConstants.FETCHING,
				data: data
			});
		})
	},

	click: () => {
		AppSlave.fetch().then((data) => {
			AppDispatcher.handleAction({
				type: AppConstants.ADD_ITEM,
				data: data
			});
		})
	}
}