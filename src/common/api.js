import { get, post, getWithBody } from './requestMethods';

export function postApplication(body) {
  return post('/application/proposals/add', body);
}

export function getApplications() {
  return get('/application/proposals');
}

export function getExortions() {
  return get('/application/frauds');
}

export function postExortion(body) {
  return post('/application/frauds', body);
}

export function getSingleApplication(body) {
  return post('/application/proposals/getone', body);
}