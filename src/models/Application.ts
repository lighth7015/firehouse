import { model } from 'parket';

export
const Model = model('Application', {
	initial: () => ({
		application: {
			shellTitle: 'My Application',
			drawerOpen: true
		},
	}),

	actions: state => ({
		ToggleOpen() {
			state.application.drawerOpen = !state.application.drawerOpen;
		},
	}),

	views: ({ application, eventLog }) => ({
		caption: () => application.shellTitle,
		appDrawer: () => application.drawerOpen,
	})
});

export default Model;
