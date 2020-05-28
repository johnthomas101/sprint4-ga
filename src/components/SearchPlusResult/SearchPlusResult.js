import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';
import axios from 'axios-proxy-fix';
import NoResult from '../NoResult/NoResult';

class SearchPlusResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "Kohli",
            data: []
        }
    }

    componentDidMount() {
        // call to get top headlines
        // set state using the data
    }

    changeState = (newValue) => {
        // this.setState(
        //     {
        //         searchTerm: newValue
        //     }
        // )
        let keyword = "";
        if (newValue) {
            keyword = newValue;
        }

        let myPromise = axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=65aaabc0ccc64c9fb10c353ce53b1f38&q=${keyword}`);
        myPromise.then(function (response) {
            console.log(response.data.articles);
            debugger
            this.setState({
                data: [...response.data.articles]
            })

        }.bind(this)
        ).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        let final = () => {
            if (this.state.data.length > 0) {
                return <Results data={this.state.data}></Results>
            }
            else {
                return <NoResult />
            }
        }
        
        return (
            <div>
                <SearchBar submitHandler={this.changeState} myProp=""></SearchBar>
                {
                    final()
                }
            </div>
        );
    }
}

export default SearchPlusResult;