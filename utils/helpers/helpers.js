export const toCamelCase = (str) => {
  return str.replace(/[-_]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}