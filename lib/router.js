FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("layout-homepage");
    }
});

FlowRouter.route('/quiz/', {
    action: function(params) {
        BlazeLayout.render("layout-quiz");
    }
});

FlowRouter.route('/quiz/new', {
    action: function(params) {
        BlazeLayout.render("layout-quiz-new");
    }
});

FlowRouter.route('/quiz/:quizId/presenter', {
    action: function(params) {
        BlazeLayout.render("layout-presenter");
    },
    subscriptions: function(params, queryParams) {
        this.register('quiz', Meteor.subscribe('pool', params.quizId));
    }
});

FlowRouter.route('/quiz/:quizId/audience', {
    action: function(params) {
        BlazeLayout.render("layout-audience");
    },
    subscriptions: function(params, queryParams) {

      console.log('params.quizId', params.quizId)

        this.register('quiz', Meteor.subscribe('pool', params.quizId));
    }
});
