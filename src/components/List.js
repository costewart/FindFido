import React, { Component } from 'react';
import { debounce } from 'lodash';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            search: '',
            
        }
        this.handleChange = this.handleChange.bind(this);
    
    }

    debouncedHandleChange = debounce(this.handleChange, 200);

    render() {
        const { search } = this.state;
        console.log('l',search.length);
        return (
            <div>
            <input type="text" className ="input" onChange={this.handleChange} placeholder="Search..."/>
                <ul>
                    { search.length > 9 && this.state.filtered.map(dog => (<li key={dog}>{dog.Name}||{dog.Breed}||{dog.Color}||{dog.Sex}</li>))}
                </ul>
            </div>
        );
    }

            componentDidMount() {
            this.setState({
                filtered: this.props.data
            });
        }

        componentWillRecieveProps(nextProps) {
            this.setState({
                filtered: nextProps.data
            });
        }

        handleChange(e) {
            console.log('handleChange');
            let currentList = [];
            let newList = [];

            if(e.target.value !== "") {
                currentList = this.props.data;
                newList = currentList.filter(datum => {
                    const lc = datum.DateCreated.toLowerCase();
                    const filter = e.target.value.toLowerCase();

                    return lc.includes(filter);
                });
                console.log(newList);

            } else {
                newList =this.props.data;
            }
            this.setState({
                filtered: newList,
                search: e.target.value,
            });

            }
        }

export default List