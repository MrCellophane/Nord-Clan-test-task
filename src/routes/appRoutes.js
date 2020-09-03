export default {
  rootPath: () => '/',
  paymentPath: id => `/payments/${id}`,
  paymentsPath: () => '/payments',
  newPaymentPath: () => '/payments/new',
};
