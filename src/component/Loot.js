import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {

    render(){

        return(
            <div>
                <h3>Bitcoin balance:</h3>
            </div>
        );
    }
}

export default connect(state => state, {fetchBitcoin})(Loot);