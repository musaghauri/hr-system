import cookie from 'react-cookies';
import nextCookies from 'next-cookies';
import { AUTH_COOKIE_NAME } from '@config';

function getCookieKeyFromName(name) {
  switch (name) {
    case 'token':
      return 't';
    case 'id':
      return 'i';
    case 'name':
      return 'n';
  }
}

function load(name, doNotParse = false) {
  const value = cookie.load(name, doNotParse);
  if (value === 'undefined') return undefined;
  return value;
}

function loadAuthCookie(name) {
  const encodedCookie = load(AUTH_COOKIE_NAME);
  if (encodedCookie === undefined) return undefined;

  const content = Buffer.from(encodedCookie, 'base64').toString();
  if (name == undefined) return JSON.parse(content);

  return JSON.parse(content)[getCookieKeyFromName(name)];
}

function loadAuthCookieAtServer(ctx, name) {
  const cookies = nextCookies(ctx);
  const encodedCookie = cookies[AUTH_COOKIE_NAME];
  if (encodedCookie === undefined) return undefined;

  const content = Buffer.from(encodedCookie, 'base64').toString();
  if (name == undefined) return JSON.parse(content);

  return JSON.parse(content)[getCookieKeyFromName(name)];
}

function save(name, value, options = { path: '/' }) {
  return cookie.save(name, value, options);
}

function saveAuthCookie(userData) {
  const content = getAuthCookieContent(userData);
  return save(AUTH_COOKIE_NAME, content);
}

function remove(name, options = { path: '/' }) {
  return cookie.remove(name, options);
}

function removeAuthCookie() {
  return remove(AUTH_COOKIE_NAME);
}

function getAuthCookieContent(userData) {
  return Buffer.from(
    JSON.stringify({
      t: userData.token,
      i: userData._id,
      n: userData.name,
      p: userData.image,
      r: userData.role,
      s: userData.isSocial,
    })
  ).toString('base64');
}

function loadAuthCookieByName(encodedCookie, name) {
  if (encodedCookie === undefined) return undefined;

  const content = Buffer.from(encodedCookie, 'base64').toString();
  if (name === undefined) return JSON.parse(content);

  return JSON.parse(content)[getCookieKeyFromName(name)];
}

export default {
  load,
  loadAuthCookie,
  loadAuthCookieAtServer,
  save,
  saveAuthCookie,
  remove,
  removeAuthCookie,
  getAuthCookieContent,
  loadAuthCookieByName,
};
