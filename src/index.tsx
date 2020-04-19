import './style/index.css';
import { h } from "preact";
import * as React from 'preact'
import devtools from 'parket/devtools';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'parket/preact';
import { ThemeProvider } from '@material-ui/styles';
import Application from "./components/app";
import theme from "./theme";
import CreateStore from "./models/Application";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
}

export
class Main extends React.Component {
	private store = CreateStore();

	componentDidMount() {
		devtools(this.store);
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Provider store={this.store}>
					<CssBaseline />
					<Application store={this.store} />
				</Provider>
			</ThemeProvider>);
	}
}

export default Main;
