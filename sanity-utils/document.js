import { toCamelCase } from './helpers/to-camel-case';

export class Document {

  create = (str ,fields) => ({
    name: toCamelCase(str),
    title: str,
    type: 'document',
    fields,
  })
}