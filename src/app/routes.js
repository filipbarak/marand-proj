"use strict";
var router_1 = require('@angular/router');
var user_details_form_component_1 = require("./Components/user-details-form/user-details-form.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/forms',
        pathMatch: 'full'
    },
    {
        path: 'forms',
        component: user_details_form_component_1.UserDetailsFormComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routes.js.map