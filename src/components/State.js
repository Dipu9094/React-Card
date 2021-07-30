import React, { Component } from 'react'


export default class state extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {

        this.setState({
            count: this.state.count + 1
        })

    }

    handelDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })

    }

    render() {
        const { count } = this.state
        return (
            <div class="cnt">
                <h1>Count : {count}</h1>
                <button class="btn" onClick={this.handleIncrement}>+</button>
                <button class="btn" onClick={this.handelDecrement} disabled={count === 0 ? true : false}>-</button>
            </div>
        )
    }
}




