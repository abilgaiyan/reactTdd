import rootReducer from './index';

describe('rootReducer', () => {
    it('initalizes the default state', ()=>{
      expect(rootReducer({}, {})).toEqual({balance:0, bitcoin:{}});
    });
})