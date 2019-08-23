import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/admin/custom-sounds', {
	name: 'custom-sounds',
	subscriptions(/* params, queryParams*/) {
		this.register('customSounds', Meteor.subscribe('customSounds'));
	},
	action(/* params*/) {
		BlazeLayout.render('main', { center: 'adminSounds' });
	},
});
