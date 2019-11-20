import { post } from './requestMethods';

export function postApplication({ client, }) {
  return post('/application/proposals/add', { firstName })
}