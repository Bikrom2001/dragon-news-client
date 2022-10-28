import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Category = () => {

    const categoryNews = useLoaderData();
    
    useTitle('Category');


    return (
        <div>
            <h2>This is cate geory : {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCart
                key={news._id}
                news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Category;