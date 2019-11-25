import { get, post } from './requestMethods';

export function postApplication(body) {
  return post('/application/proposals/add', body);
}

export function getApplications() {
  return get('/application/proposals');
}

export function getExortions() {
  return get('/application/frauds');
}