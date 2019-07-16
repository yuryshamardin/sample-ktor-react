import React, {Component} from 'react';
import axios from 'axios';

const axiosInstance = axios.create({});

export default class SimpleComponent extends Component {
    constructor() {
        super();
        this.state = {title: ''}
    }

    componentDidMount() {
        axiosInstance.get("/demo")
            .then((res) => {
                console.log('res from server is: ', res);
                return res;
            })
            .then(res => this.setState({title: res.data}));
    }

    render() {
        return (
            <p>
                {this.state.title}
            </p>
        );
    }
}
