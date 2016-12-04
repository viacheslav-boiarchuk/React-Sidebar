import React, { Component } from 'react';
import windowHoc from '../hoc/windowWidth';

class Sidebar extends Component {

	constructor(args) {
		super(args);
		this.state = {
			active: false
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.windowWidth > 768) {
			this.setState({
				active: false
			})
		}
	}

	burgerToggle = () => {
		this.setState({
			active: !this.state.active
		})
	};

	render() {
		let {active} = this.state;
		let {hideAside} = this.props;
		console.log(this.props);
		return (
			<div className="aside">
				<div className={(this.props.windowWidth > 768) ? 'hidden' : 'burger' }>
					<i className={"active-btn-"+active} onClick={this.burgerToggle}>burger</i>
				</div>
				<div className={(this.props.windowWidth > 768) ? null : ((active && hideAside) ? 'visible-content' : 'hidden-content' ) }>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda esse nam nihil quos velit
					voluptatum! Aliquam aperiam architecto aut cumque doloribus officiis perferendis quia rerum, sit
					vel?
					Maiores, nesciunt, soluta?
				</div>
			</div>

		)
	}
}
export default windowHoc(Sidebar);