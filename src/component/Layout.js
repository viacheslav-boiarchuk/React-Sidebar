import React, { Component } from 'react';


function checkEventFunc(field) {
	var currentTag = field;
	while (!currentTag.classList.contains('aside')) {
		currentTag = currentTag.parentNode;
		if (currentTag.tagName === 'HTML') {
			currentTag = false;
			break;
		}
	}
	return (currentTag ? 'true' : 'false');
}

class Layout extends Component {

	constructor(args) {
		super(...args);
		this.state = {
			hideAside: false
		}
	}

	checkClickEvent = (e) => {
		(checkEventFunc(e.target) === 'false') ?
				this.setState({
					hideAside: false
				})
				:
				this.setState({
					hideAside: true
				})
	};

	render() {
		let {hideAside} = this.state;
		return (
			<div className="Layout-content" onClick={this.checkClickEvent}>
				{(hideAside) ?
						React.cloneElement(this.props.sidebar, {
							hideAside: true
						})
						:
						React.cloneElement(this.props.sidebar, {
							hideAside: false
						})
				}
				{this.props.children}
			</div>
		)

	}
}

export default Layout;