sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sravan/ust/app/test/integration/FirstJourney',
		'sravan/ust/app/test/integration/pages/ReqHeaderSetList',
		'sravan/ust/app/test/integration/pages/ReqHeaderSetObjectPage',
		'sravan/ust/app/test/integration/pages/ReqItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, ReqHeaderSetList, ReqHeaderSetObjectPage, ReqItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sravan/ust/app') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheReqHeaderSetList: ReqHeaderSetList,
					onTheReqHeaderSetObjectPage: ReqHeaderSetObjectPage,
					onTheReqItemSetObjectPage: ReqItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);