import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

let lib = require('../utils/library.js');


class Navigation extends Component {
	render() {
		const classes = this.props.classes;
		return (
			<div className={classes.root}>
				<AppBar position="absolute">
					<Toolbar>
						<IconButton color="contrast" aria-label="Menu" onClick={this.props.toggleLeftPane.bind(this)}>
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit" className={classes.flex}>
							{lib.getDbConfig(this.props.dbIndex, "title")}
						</Typography>
						{/*<IconButton color="contrast" aria-label="Menu">
							<HomeIcon />
						</IconButton>*/}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired,
};

const styleSheet = createStyleSheet(theme => ({
	root: {
		width: '100%'
	},
	flex: {
		flex: 1
	}
}));

export default withStyles(styleSheet)(Navigation);