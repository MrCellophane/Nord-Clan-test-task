import FetchHelpers from 'utils/FetchHelpers';

export default {
  loadProfile() {
    const path = 'https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/profiles?search=profile1';
    return FetchHelpers.get(path);
  },
  create(params) {
    const path = 'https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/profiles';
    return FetchHelpers.post(path, params);
  },
  destroy() {
    const path = 'https://5f4b74baea007b0016b1d78f.mockapi.io/api/v1/profiles';
    return FetchHelpers.delete(path);
  },
};
// const getData = () => {
//   const data = {
//     meta: {},
//     data: {
//       user: {
//         id: 1,
//         firstName: 'Teacher',
//         lastName: 'Teacherov',
//       },
//     },
//   };
//   return data;
// };
// export default {
//   loadProfile(params) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(getData(params));
//       }, 1000);
//     });
//   },
// };
