import balanceReducer from './balance';
import * as constants from '../actions/constants';
import balance from './balance';

describe('balanceReducer',()=>{
  it('set the balance',()=>{
      const balance = 10;

      expect(balanceReducer(undefined, {type:constants.SET_BALANCE, balance })).toEqual(balance);

  });

  it('deposit into the balance', ()=>{
     const deposit = 20;
     const intialState =5;
     expect(balanceReducer(intialState, {type: constants.DEPOSIT,deposit })).toEqual(intialState + deposit);
  });

  it('withdraw from the balance', () => {
    const withdraw = 20;
    const intialState = 30;
    expect(balanceReducer(intialState, {type: constants.WITHDRAW, withdraw}))
    .toEqual(intialState - withdraw);
  })

})

