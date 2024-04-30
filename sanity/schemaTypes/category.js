import { document, field } from "../../utils"

export const category = document.create('Category', [
  field.string('Title'),
  field.string('Description'),
])
