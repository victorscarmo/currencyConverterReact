import React, { Component } from 'react';

import './Converter.css'

export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coinA_value: "",
            coinB_value: "$$$"
        }

        this.converter = this.converter.bind(this);
    }

    converter() {

        let from_to = `${this.props.coinA}_${this.props.coinB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=51da84b9c4e24e22afba`

        fetch(url)
            .then(res => {

                return res.json()

            })
            .then(json => {
                let price = json[from_to]
                let coinB_value = (parseFloat(this.state.coinA_value) * price).toFixed(2)
                this.setState({ coinB_value })
            })
    }

    render() {
        return (
            <div className="converter">
                <h2>{this.props.coinA} para {this.props.coinB}</h2>
                <input type="text" onChange={(event) => { this.setState({ coinA_value: event.target.value }) }}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2 className="result">{this.state.coinB_value}</h2>

            </div>
        )
    }
}