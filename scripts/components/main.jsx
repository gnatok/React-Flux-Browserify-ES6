'use strict';

import React from 'react';
import AppActions from '../actions/App-actions.js';
import AppStore from '../stores/App-store.js';

export default class MainApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = AppStore.getState();
	}

	componentWillMount() {
		AppStore.addChangeListener(this._onChange.bind(this));
		if(this.state.message === '') {
			AppActions.fetch();
		}
	}

	componentWillUnmount() {
		AppStore.addRemoveListener(this._onChange.bind(this));
	}

	_onChange() {
		this.setState(AppStore.getState())
	}

	handleClick(e){
    AppActions.click(e)
  }

	render() {
		return (
			<h1 onClick={this.handleClick.bind(this)}>{this.state.message}</h1>
		);
	}
}