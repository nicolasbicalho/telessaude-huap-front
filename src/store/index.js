import { account } from './account'
// import { user } from './user'
// import { acquisitionData } from './acquisitionData'
// import { performanceRecebimentos } from './performanceRecebimentos'
// import retailer from './retailer'


import { createStore } from 'vuex';

export default createStore({
  modules:{
    account,
  }
});