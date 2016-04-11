import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  description() { return faker.lorem.sentence() },
  note() { return faker.lorem.sentences(3) }
});
