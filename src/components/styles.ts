import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const drawerWidth = 248;
export const appBarHeight = 50;
export const scaleFactor = 1.05;

/* eslint-disable */
const AppStyles = (theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			overflowY: "inherit"
		},
		gridList: {
			transform: "translateZ(0)",
			paddingLeft: 4,
			height: "3.5em",
			minWidth: "100vw"
		},

		gridItems: {
			background: "transparent",
			height: "3rem"
		},

		headings: {
			height: appBarHeight,
			fontWeight: 400
		},

		appHeading: {
			height: appBarHeight / 1.2,
			fontWeight: 400
		},

		appBar: {
			overflow: "hidden",
			[theme.breakpoints.up("sm")]: {
				width: `calc(100% - ${drawerWidth}px)`,
				height: appBarHeight + 4,
				top: appBarHeight - 2,
				marginLeft: drawerWidth,
				zIndex: 0
			}
		},
		mainAppBar: {
			base: {
				root: {
					height: "13rem"
				}
			},
			shell: {
				[theme.breakpoints.up("sm")]: {
					width: `calc(100%)`,
					height: appBarHeight,
					zIndex: 100
				}
			}
		},
		drawerHeader: {
			[theme.breakpoints.up("sm")]: {
				width: `calc(100%)`,
				height: appBarHeight * scaleFactor,
				backgroundColor: "#fafafa",
				color: "#0288d1"
			}
		},
		menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up("sm")]: {
				display: "none"
			}
		},
		// necessary for content to be below app bar
		toolbar: theme.mixins.toolbar,
		main: {
			flexGrow: 1,
			position: "relative",
			padding: theme.spacing(2)
		},

		content: {
			top: appBarHeight * 2.25,
			overflowY: "auto",
			width: `calc(100% - ${drawerWidth}px)`,
			bottom: 0,
			right: 0,
			position: "fixed"
		}
	});

const DrawerStyles = (theme: Theme) =>
	createStyles({
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			position: "fixed",
			background: "green"
		},
		paper: {
			width: drawerWidth,
			top: "2.75rem !important"
		},
		container: {
			overflow: "auto"
		}
	});

export const useDrawerStyles = makeStyles(DrawerStyles);
export const useAppStyles = makeStyles(AppStyles);
