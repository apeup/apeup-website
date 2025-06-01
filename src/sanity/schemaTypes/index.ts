import { type SchemaTypeDefinition } from 'sanity'
import home from './home'
import preview from './preview'
import about from './about'
import roadmap from './roadmap'
import footer from './footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home,preview,about,roadmap,footer],
}
