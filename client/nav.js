Template.nav.events({
  "click .logout": function(event){
    event.preventDefault();
    Meteor.logout();
  }
});
