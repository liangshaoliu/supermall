import {
  request
} from "./request";

export function gethHomeMultidata() {
  return request({
    url: '/home/multidata'
  })

}
