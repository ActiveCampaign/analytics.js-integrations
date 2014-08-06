
/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');
//var activecampaign = require('activecampaign');

/**
 * Expose plugin.
 */

module.exports = exports = function(analytics) {
  analytics.addIntegration(ActiveCampaign);
};

/**
 * Expose `ActiveCampaign` integration.
 */

var ActiveCampaign = exports.Integration = integration('ActiveCampaign')
  .assumesPageview()
  .readyOnLoad()
  .option('api_url', '')
  .option('api_key', '');

/**
 * Initialize.
 *
 * @param {Object} page
 */

ActiveCampaign.prototype.initialize = function(page) {
  // do stuff with `this.options` to initialize your library
	this.load();
};

/**
 * Identify.
 *
 * @param {String} id (optional)
 * @param {Object} traits (optional)
 * @param {Object} options (optional)
 */

ActiveCampaign.prototype.identify = function(id, traits, options) {
  // do stuff with `id` or `traits`
	var email = traits.email;
};

/**
 * Track.
 *
 * @param {Track} track
 */

ActiveCampaign.prototype.track = function(track) {
  var props = track.properties();
  push('trackEvent', track.event(), props);
};