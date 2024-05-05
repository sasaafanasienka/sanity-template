export class Field {

  _toCamelCase = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  string = (str, config) => ({
    name: this._toCamelCase(str),
    title: str,
    type: 'string',
    ...config
  })

  image = (str, config) => ({
    name: this._toCamelCase(str),
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

  file = (str) => ({
    name: this._toCamelCase(str),
    title: str,
    type: 'file',
  })
}