import axios from 'axios'

export const getCitiesRequest = () =>
    axios.get('https://www.fastmock.site/mock/044cf75eb63444b05d95ad68f893e053/meituan/cities')
export const getBannersRequest = () =>
    axios.get('https://www.fastmock.site/mock/044cf75eb63444b05d95ad68f893e053/meituan/banners')
export const getRestaurantsRequest = () =>
    axios.get('https://www.fastmock.site/mock/044cf75eb63444b05d95ad68f893e053/meituan/restaurants')
export const getHomeDetailOrderRequest = () =>
    axios.get('/src/assets/data/goods.json')
// export const getHomeDetailOrderRequest = () =>
//     axios.get('https://fate-star3.github.io/MeiTuan007/data/goods.json')
export const getHomeDetailCommentRequest = () =>
    axios.get('https://www.fastmock.site/mock/044cf75eb63444b05d95ad68f893e053/meituan/assess')
export const getHomeDetailSellerRequest = () =>
    axios.get('https://www.fastmock.site/mock/044cf75eb63444b05d95ad68f893e053/meituan/seller')
export const getKeywordsRequest = 
    axios.get('https://www.fastmock.site/mock/044cf75eb63444b05d95ad68f893e053/meituan/restaurants')