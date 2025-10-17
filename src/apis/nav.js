import http from '@/utils/https'
export const getNavAPI = () => {
  return http({
    url:'/nav',
    method:'GET'
  })
}
