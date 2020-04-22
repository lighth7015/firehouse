import { h, Fragment } from "preact";
import * as React from "preact";
import { forwardRef } from "preact/compat";
import { Link } from "preact-router/match";
import Slide from "@material-ui/core/Slide";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SvgIcon from "@material-ui/core/SvgIcon";
import { TransitionProps } from "@material-ui/core/transitions";
import { useDrawerStyles } from "../styles";

const Transition = forwardRef(function Transition(
	props: TransitionProps & { children?: React.ReactElement<any, any> },
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

enum MenuTypes {
	Category,
	MenuItem,
	Divider
}

interface NavEntry {
	type: MenuTypes;
	index: number;
}

interface MenuItem {
	title: string;
	route: string | undefined;
	image: SvgIcon | undefined;
	trans: number | undefined;
	items: List<NavEntry> | undefined;
}

export default class AppDrawer extends React.Component {
	private classes = useDrawerStyles();
	private entries: List<MenuItem> = [
		{
			title: "Navigation",
			items: [
				{ type: MenuTypes.Category, index: 0 },
				{ type: MenuTypes.Category, index: 3 },
				{ type: MenuTypes.Divider },
				{ type: MenuTypes.MenuItem, index: 1 },
				{ type: MenuTypes.MenuItem, index: 2 }
			]
		},
		{
			title: "Menu Item",
			route: "first"
		},
		{
			title: "Second Item",
			route: "second"
		},
		{
			title: "Submenu",
			items: []
		}
	];

	state = {
		current: [0]
	};

	private leaving = false;

	private get items(): List<MenuItem> {
		const {
			entries,
			state: { current }
		} = this;
		const index: number = current[current.length - 1];

		const items = [];

		if (current.length > 1) {
			const prevIndex: number = current[current.length - 1];
			items.push({ index: prevIndex, type: MenuTypes.MenuItem });
		}

		return items.concat((index >= 0 && index < entries.length ? entries[index] : entries).items);
	}

	private activateMenuItem(event: any, menu: MenuItem, index: number) {
		const {
			state: { current }
		} = this;

		if (current.length > 1 && index == 0) {
			current.pop();
			this.setState(current);
		} else {
			console.log("TODO: Attempt to activate menu item.", menu);
		}
	}

	private activateCategory(event: any, menu: MenuItem, index: number) {
		const {
			state: { current }
		} = this;

		if (index == 0 && current.length > 1) {
			current.pop();
		} else {
			current.push(menu.index);
		}

		this.setState(current);
	}

	private activate(event: any, menu: MenuItem, index: number) {
		if (menu.type === MenuTypes.MenuItem) {
			const { [menu.index]: child } = this.entries;
			this.activateMenuItem(event, child, index);
		} else if (menu.type === MenuTypes.Category) {
			this.activateCategory(event, menu, index);
		}
	}

	render({ open, shouldCollapse = false }) {
		const {
			state: { current }
		} = this;

		return (
			<Slide direction="left" in={true} mountOnEnter unmountOnExit>
				<Drawer
					className={this.classes.drawer}
					variant="permanent"
					elevation={24}
					classes={{
						paper: this.classes.paper
					}}
				>
					<List>
						{this.items.map(
							(menu: MenuItem, index: number) =>
								(menu.type === MenuTypes.Divider && <ListItem key={index} dense divider />) ||
								(index === 0 && current.length == 1 && (
									<Fragment>
										<ListItem key={index} selected>
											<ListItemText primary={this.entries[menu.index].title} />
										</ListItem>
									</Fragment>
								)) ||
								(index === 0 && current.length > 1 && (
									<ListItem
										button={menu.type !== MenuTypes.Divider}
										onClick={event => this.activate(event, menu, index)}
										key={index}
									>
										<ListItemIcon>
											<KeyboardArrowLeft />
										</ListItemIcon>
										{(menu.type === MenuTypes.MenuItem && (
											<ListItemText primary={this.entries[menu.index].title} />
										)) || <Fragment />}{" "}
									</ListItem>
								)) || (
									<ListItem
										button={menu.type !== MenuTypes.Divider}
										onClick={event => this.activate(event, menu, index)}
										key={index}
										divider={menu.type === MenuTypes.Divider}
									>
										{" "}
										{(menu.type === MenuTypes.Category && (
											<Fragment>
												<ListItemText primary={this.entries[menu.index].title} />
												<ListItemSecondaryAction>
													<KeyboardArrowRight />
												</ListItemSecondaryAction>
											</Fragment>
										)) ||
											(menu.type === MenuTypes.MenuItem && (
												<ListItemText primary={this.entries[menu.index].title} />
											))}
									</ListItem>
								) || <Fragment />
						)}
						<Divider />
					</List>
				</Drawer>
			</Slide>
		);
	}
}
