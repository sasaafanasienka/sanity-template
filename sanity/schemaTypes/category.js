import { document, field } from "../../sanity-utils"

export const category = document.create('Category', [
  field.string('Title'),
  field.string('Description'),
])
