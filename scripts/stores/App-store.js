'use strict';

import AppDispatcher from '../dispatchers/App-dispatcher.js';
import AppConstants from '../constants/App-constants.js';
import {EventEmitter} from 'events';

let data = {
	message: ''
};

class AppStore extends EventEmitter {

	getState() {
		return data;
	}

	emitChange() {
		this.emit('CHANGE');
	}

	addChangeListener(cb) {
		this.on('CHANGE', cb)
	}

	removeChangeListener(cb) {
		this.removeListener('CHANGE', cb);
	}
}

let _AppStore = new AppStore();

export default _AppStore;

AppDispatcher.register((payload) => {
	let action = payload.action;
	switch(action.type) {
		case AppConstants.FETCHING:
			data = action.data;
			_AppStore.emitChange();
			break;
		default:
			break;
	}
});