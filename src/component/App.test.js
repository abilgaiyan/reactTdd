import React from 'react';
import { shallow  } from 'enzyme';
import App from './App';

describe('App', () =>{
  const app = shallow(<App />);

  it('App rendered correctly',()=>{
     expect(app).toMatchSnapshot();
  });

  it('contain a connected Wallet component',()=>{
    expect(app.find('Connect(Wallet)').exists()).toBe(true)
  })

  it('contain a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });
});