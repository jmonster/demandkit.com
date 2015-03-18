import Ember from 'ember';

export default Ember.Controller.extend({
  didSubmitWaitlist: false,

  actions: {
    submitWaitlist: function() {
      var self  = this;
      var name  = this.get('waitlistName');
      var email = this.get('waitlistEmail');

      return $.post('/__/forms/waitlist', {
        name: this.get('waitlistName'),
        email: this.get('waitlistEmail')
      }).then(function() {
        self.set('didSubmitWaitlist', true);
      });
    }
  }
});
