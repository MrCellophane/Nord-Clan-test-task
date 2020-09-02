const getData = () => {
  const data = {
    meta: {},
    data: {
      user: [
        {
          id: 1,
          firstName: 'Teacher',
          lastName: 'Teacherov',
          payments: [
            {
              id: 1,
              name: 'покупка ашан',
              price: '40р',
            },
            {
              id: 2,
              name: 'покупка алента',
              price: '20р',
            },
            {
              id: 3,
              name: 'алиэкспрес',
              price: '550р',
            },
            {
              id: 4,
              name: 'магнит',
              price: '230р',
            },
            {
              id: 15,
              name: 'пятерочка',
              price: '120р',
            },
          ],
        },
      ],
    },
  };
  console.log('data', data);
  return data;
};

export default {
  loadPayments(params) {
    console.log('getData', getData(params));
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(getData(params));
      });
    });
  },
};
