sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sravan.ust.app',
            componentId: 'ReqItemSetObjectPage',
            contextPath: '/ReqHeaderSet/items'
        },
        CustomPageDefinitions
    );
});