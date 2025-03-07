import {
  SlugImplementation,
  MongoSlugInterface,
  KnexSlugInterface,
} from './Implementation';
import { resolveView } from '../../resolve-view';

const Slug = {
  type: 'Slug',
  implementation: SlugImplementation,
  views: {
    Controller: resolveView('types/Text/views/Controller'),
    Field: resolveView('types/Text/views/Field'),
    Filter: resolveView('types/Text/views/Filter'),
  },
  adapters: {
    knex: KnexSlugInterface,
    mongoose: MongoSlugInterface,
  },
};

export default Slug;
