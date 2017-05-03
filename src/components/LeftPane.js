import React, { Component } from 'react';
import LeftPaneDbSchema from './LeftPaneDbSchema';
import '../styles/LeftPane.css';

class LeftPane extends Component {
	render() {
		return (
			<div className="LeftPane">
				<LeftPaneDbSchema changeTargetTable={this.props.changeTargetTable} changeTargetTableColumns={this.props.changeTargetTableColumns} />
			</div>
		);
	}
}

export default LeftPane;
