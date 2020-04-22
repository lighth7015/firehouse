import { h } from "preact";
import * as React from "preact";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import { drawerWidth, useAppStyles } from "./styles";
import Drawer from "./drawer";

interface ListItem {
	name: string;
	value: string;
}
interface ColumnDetail {
	caption: string;
	entries?: Array<ListItem>;
}

export default class Application extends React.Component {
	private state: object = {
		shouldCollapse: false,
		isNavbarOpened: false
	};

	private columns: Array<ColumnDetail> = [
		{ caption: "Event Detail" },
		{ caption: "" },
		{ caption: "Date/Time", entries: [] }
	];

	/* eslint-disable */
	handleResizeEvent({ target: { outerWidth: width, outerHeight: height } }) {
		const state = Object.assign({}, this.state, {
			shouldCollapse: width - drawerWidth < drawerWidth
		});

		if (state.shouldCollapse) {
			this.setState(state);
		}
	}

	toggleDrawer() {
		const {
			state,
			state: { isNavbarOpened, shouldCollapse }
		} = this;

		if (shouldCollapse) {
			this.setState(
				Object.assign({}, state, {
					isNavbarOpened: !state.isNavbarOpened
				})
			);
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleResizeEvent.bind(this));
	}

	render() {
		const classes = useAppStyles();

		return (
			<div className={classes.root}>
				<AppBar color="primary" position="absolute" elevation={2} className={classes.mainAppBar.shell}>
					<Toolbar variant="dense">
						<Typography variant="h5" className={classes.appHeading} noWrap>
							Hello, world!
						</Typography>
					</Toolbar>
				</AppBar>
				<AppBar elevation={0} color="secondary" position="fixed" className={classes.appBar}>
					<Toolbar classes={{ root: classes.gridList }}>
						<GridList className={classes.gridList} cellHeight={40} cols={this.columns.length}>
							{this.columns.map((column: ColumnDetail, index: number) => (
								<GridListTile key={index}>
									{column.entries ? (
										<GridListTileBar
											title={column.caption}
											subtitle={<span>Test</span>}
											classes={{
												root: classes.gridItems
											}}
										/>
									) : (
										<GridListTileBar
											title={<Typography variant="h6">{column.caption}</Typography>}
											classes={{
												root: classes.gridItems
											}}
										/>
									)}
								</GridListTile>
							))}
						</GridList>
					</Toolbar>
				</AppBar>
				<Drawer opened={this.state.isNavbarOpened} />
				<main className={classes.main}>
					<Container className={classes.content} maxWidth="xl">
						<Typography align="justify" paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo
							vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque
							non tellus.  Convallis convallis  tellus id  interdum velit laoreet id donec ultrices.  Odio
							morbi quis  commodo odio  aenean sed adipiscing.  Amet nisl suscipit adipiscing bibendum est
							ultricies integer quis.
						</Typography>
						<Typography align="justify" paragraph>
							Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
							fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
							feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit
							sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
						</Typography>
						<Typography align="justify" paragraph>
							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
							facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt.
							Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
							mauris.
						</Typography>
						<Typography align="justify" paragraph>
							Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio.
							Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida
							rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
							morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
							aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel
							facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
						</Typography>
					</Container>
				</main>
			</div>
		);
	}
}
