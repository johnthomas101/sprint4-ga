import React from 'react';
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

function Results() {
    return (

        <div className="results">
            {
                cardArray.map(
                    (obj, index) => {
                        return <NewsCard
                        key={index}
                        title={obj.title}
                        src={obj.imgSrc}
                        desc={obj.desc}
                        author={obj.author}
                        >
                        </NewsCard>
                    }
                )
            }
            {/* {
                cardArray.map(
                    (obj)=>{
                        return <NewsCard 
                        title={obj.title} 
                        author={obj.author} 
                        desc={obj.desc}
                        src={obj.imgSrc}></NewsCard>       
                    }
                )
            } */}

            {/* <NewsCard title="Hii" author="author" desc="description"></NewsCard>
            <NewsCard title="Hii" author="author" desc="description"></NewsCard> */}
        </div>
    )
}

export default Results;