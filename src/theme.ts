import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

import lightBlue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/grey';

const SourceSansPro = {
	fontFamily: 'Source Sans Pro',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 300,
	src: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200,300;400;600&display=swap',
};

const theme: ThemeOptions = createMuiTheme({
	typography: {
		h1: {
			fontWeight: 200,
			fontSize: 100
		},
		h2: {
			fontWeight: 200,
			fontSize: 100
		},
		h3: {
			fontWeight: 200,
			fontSize: 100
		},
		h4: {
			fontWeight: 200
		},
		h5: {
			fontWeight: 200,
			fontSize: 30
		},
		h6: {
			fontWeight: 300,
			fontSize: 20,
			lineHeight: 1.6
		},
		h7: {
			fontWeight: 200,
			fontSize: 30
		},
		fontFamily: '"Source Sans Pro", Arial'
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [
				SourceSansPro
				],
			},
		},
	},
	palette: {
		primary: {
			main: lightBlue[700],
			accent: lightBlue[600]
		},
		secondary: {
			main: lightBlue[600],
			accent: grey[50]
		},
	},
});

export default theme;
