import React, { Component } from 'react';
import './Results.css';
import NewsCard from '../NewsCard/NewsCard';

let cardArray = [
    {
        author: "Author Name",
        imgSrc: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/06/Pictures/_be74e1e0-8f98-11ea-85c6-561c42737975.jpg",
        title: "News Title 1",
        desc: "This is the news description"
    },
    {
        author: "Author Name",
        imgSrc: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/06/Pictures/_be74e1e0-8f98-11ea-85c6-561c42737975.jpg",
        title: "News Title 2",
        desc: "This is the news description"
    },
    {
        author: "Author Name",
        imgSrc: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/06/Pictures/_be74e1e0-8f98-11ea-85c6-561c42737975.jpg",
        title: "News Title 3",
        desc: "This is the news description"
    }
    ,
    {
        author: "Author Name",
        imgSrc: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/06/Pictures/_be74e1e0-8f98-11ea-85c6-561c42737975.jpg",
        title: "News Title 4",
        desc: "This is the news description"
    }
    ,
    {
        author: "Author Name",
        imgSrc: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/06/Pictures/_be74e1e0-8f98-11ea-85c6-561c42737975.jpg",
        title: "News Title 5",
        desc: "This is the news description"
    }
    ,
    {
        author: "Author Name",
        imgSrc: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/06/Pictures/_be74e1e0-8f98-11ea-85c6-561c42737975.jpg",
        title: "News Title 6",
        desc: "This is the news description"
    }
    ,
    {
        author: "Author Name",
        imgSrc: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/06/Pictures/_be74e1e0-8f98-11ea-85c6-561c42737975.jpg",
        title: "News Title 7",
        desc: "This is the news description"
    }
]

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: [...cardArray]
            data: []
        }
    }
    componentDidMount() {
        let myPromise = fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=65aaabc0ccc64c9fb10c353ce53b1f38");
        myPromise.then(function (response) {
            response.json().then(
                function (responseInner) {
                    if (responseInner.articles) {
                        // savedData = [...responseInner.articles];
                        console.log(responseInner.articles);
                        this.setState({
                            data: [...responseInner.articles]
                        })
                    }
                }.bind(this)
            )
                .catch(function (error) {
                    console.log(error);
                });
        }.bind(this)
        ).catch(function (error) {
            console.log(error);
        })
        console.log("componentDidMount");
    }
    render() {
        return (
            <div className="results">
                {
                    this.state.data.map(
                        (obj, index) => {
                            return <NewsCard
                                key={index}
                                title={obj.title}
                                src={obj.urlToImage}
                                desc={obj.description}
                                author={obj.author}
                            >
                            </NewsCard>
                        }
                    )
                }
            </div>
        );
    }
}

export default Results;

// function Results() {
//     return (

//         <div className="results">
//             {
//                 cardArray.map(
//                     (obj, index) => {
//                         return <NewsCard
//                         key={index}
//                         title={obj.title}
//                         src={obj.imgSrc}
//                         desc={obj.desc}
//                         author={obj.author}
//                         >
//                         </NewsCard>
//                     }
//                 )
//             }
//         </div>
//     )
// }

// export default Results;