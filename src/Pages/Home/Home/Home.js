import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Home = () => {

    const AllNews = useLoaderData();

    useTitle('Home');

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