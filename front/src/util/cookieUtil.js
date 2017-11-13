/**
 * cookie 操作类
 * Created by tianrenjie on 2017/10/13
 */

/**
 * 设置cookie
 * @param name
 * @param value
 * return {*}
 */
export function setCookie(name, value) {
  // eslint-disable-next-line
  document.cookie = name + '=' + encodeURI(value);
}

/**
 * 获取cookie
 * @param name
 * return {string}
 */
export function getCookie(name) {
  let arr;
  // eslint-disable-next-line
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  // eslint-disable-next-line
  if (arr = document.cookie.match(reg)) {
    return decodeURI(arr[2]);
  }
  return null;
}
