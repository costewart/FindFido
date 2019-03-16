import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        const data = require('../data.json')
        this.items = data.map((data) => <li>{data.Name} || {data.Breed} || {data.Sex} || {data.Color} </li>)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.items}
                </ul>
            </div>
        );
    }
}

export default List