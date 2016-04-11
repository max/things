import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),

  completedAt: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),
  note: DS.attr('string')
});
