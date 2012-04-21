Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'RaxaEmr.Registration',
	controllers: ['Main'],
	views: ['Bmi','Home', 'Register', 'Search','Viewport'],
    models: ['Patient'], 

	launch: function() {
		Ext.create('RaxaEmr.Registration.view.Viewport');
	}
});

