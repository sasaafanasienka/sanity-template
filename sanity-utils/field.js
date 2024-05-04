import { toCamelCase } from './helpers/to-camel-case';

export class Field {

  string = (str, config) => ({
    name: toCamelCase(str),
    title: str,
    type: 'string',
    ...config
  })

  image = (str, config) => ({
    name: toCamelCase(str),
    title: str,
    type: 'image',
    fields: [
      this.string('Alt', {
        initialValue: 'Decorative image',
      }),
      this.string('Caption'),
    ],
    ...config
  })

  video = (str, config) => ({
    name: toCamelCase(str),
    title: str,
    type: 'file',
    fields: [
      this.string('Caption'),
    ],
    ...config
  })

  file = (str, config) => ({
    name: toCamelCase(str),
    title: str,
    type: 'file',
    ...config
  })
}