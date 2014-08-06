
var Analytics = require('analytics.js').constructor;
var integration = require('analytics.js-integration');
var tester = require('analytics.js-integration-tester');
var plugin = require('./');

describe('ActiveCampaign', function() {

	var ActiveCampaign = plugin;
	var activecampaign;
	var analytics;
  var options = {
  	api_url: 'https://feature-deals.api-us1.com',
    api_key: '968ef8eb4a288ac02adbd3c2aad76fa12595142c0363df206b92e5350ae115ececca88e1',
    events: { event: 'goal_1' }
  };

  beforeEach(function() {
    analytics = new Analytics;
    activecampaign = new ActiveCampaign(options);
    analytics.use(plugin);
    analytics.use(tester);
    analytics.add(activecampaign);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    activecampaign.reset();
    sandbox();
  });

  it('should have the correct settings', function() {
    var Test = integration('ActiveCampaign')
      .assumesPageview()
      .readyOnLoad()
			.option('api_url', '')
			.option('api_key', '');

    analytics.validate(ActiveCampaign, Test);
  });

  after(function() {
    activecampaign.reset();
  });

});