import { post } from './requestMethods';

export function postApplication(body) {
  return post('/application/proposals/add', body)
}