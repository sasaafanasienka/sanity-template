import { field, document } from "../../sanity-utils"

export const mainPage = document.create('Main page', [
  field.string('Tag'),
  field.string('Title'),
  field.string('Description'),
  field.image('Main Image'),
  field.file('Lottie'),
  field.video('Video instruction'),
])