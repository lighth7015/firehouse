import { FunctionalComponent, Fragment, h } from "preact";
import * as React from "preact";
import clsx from 'clsx';
import { Link } from "preact-router/match";
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { useDrawerStyles } from '../styles';

export default function NavDrawer({ open, shouldCollapse = false }) {
	const classes = useDrawerStyles();
	return (
		<Drawer className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.paper
				}}>
			<Toolbar component="header" color="primary" variant="dense">
				<Typography variant="h6" noWrap>
					Clipped drawer
				</Typography>
			</Toolbar>
			<main className={classes.drawerContainer}>
				<List>{
					["Inbox", "Starred", "Send email", "Drafts"].map((text, index) =>
					(<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>))
				}</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
						{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
					))}
				</List>
			</main>
		</Drawer>
	);
}
