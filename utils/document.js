export class Document {

  _toCamelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  create = (str ,fields) => ({
    name: this._toCamelCase(str),
    title: str,
    type: 'document',
    fields,
  })
}