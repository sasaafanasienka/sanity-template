import {blockContent} from './schemaTypes/blockContent'
import {category} from './schemaTypes/category'
import {post} from './schemaTypes/post'
import { author } from './schemaTypes/author'
import { mainPage } from './schemaTypes/mainPage'

export const schema = {
  types: [mainPage, blockContent, category, post, author],
}
