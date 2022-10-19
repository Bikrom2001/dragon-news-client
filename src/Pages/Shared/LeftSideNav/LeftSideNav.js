import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])


    return (
        <div>
            <h5>All Categories :{categories.length}</h5>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;