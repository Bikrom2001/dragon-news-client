import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Home = () => {

    const AllNews = useLoaderData();

    return (
        <div>
            <h2>Dragon news is Home {AllNews.length}</h2>
            {
                AllNews.map(news => <NewsSummaryCart
                key={news._id}
                news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;