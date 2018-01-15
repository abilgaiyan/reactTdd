import React from 'react';
import { shallow } from 'enzyme';
import {Wallet} from './Wallet';

describe('Wallet ', () => {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();

    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw }; 
    const wallet = shallow(<Wallet {...props} />);

    it('Wallet component render properly',()=>{
       
        expect(wallet).toMatchSnapshot();

    })
    
    it('display the balance from props', ()=>{
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    })

    it('create a input text for deposit to balance or withdraw balance',()=>{
       expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when user types into the wallet input ', ()=>{
        const userBalance = '25';

        beforeEach(()=>{
            wallet.find('.input-wallet').simulate('change', { target: {value: userBalance}});
        });

        it('update the local wallet balance in `state` and converts to number', ()=>{
            expect(wallet.state().balance).toEqual(parseInt(userBalance,10));
        })

        describe('and the user want to make a deposit',()=>{

            beforeEach(()=>{
              wallet.find('.btn-deposit').simulate('click');
            });

            it('dispatches the `deposit()` it receive from props with local balance',()=>{
               expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance,10));
            });

        })
        describe('and if user want to make a withdraw', ()=>{
          beforeEach(()=>{
           wallet.find('.btn-withdraw').simulate('click');
          });

          it('dispatches the `withdraw()` it receive from props with the local balance ',()=>{
             expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance,10));
          });
        });   

    })
});