import React, { useState, useEffect } from 'react';
import Header from './Header';
import useDataFetch from '../utils/useDataFetch';
import Cards from './Cards';
import "../styles/body.css"
import { useDispatch, useSelector } from 'react-redux';
import { cardData, originalData } from '../redux/appSlice';
import { v4 as uuidv4 } from 'uuid';
import Shimmer from './ShimmerUi';


// working pagination is here, means: when the user will scroll the page
// only after the next page api will call

// Handling long text have been implemented.
// buffer in pagination have been implemented.
//
const Body = () => {
    const [allData, setAllData] = useState([]);
    const [pageId, setPageId] = useState(1); // there is three api age this is for that
    const movieList = useSelector(state => state.movieList.items); // we are subscribing items from redux store
    const { data, loading, error } = useDataFetch(pageId);  // calling the custom hooks
    const dispatch = useDispatch();  // To dispatch an action
    
    useEffect(() => {
        if (data) {
            setAllData(prevData => [...prevData, data]); // Append new data to the list
        }
    }, [data]);

    useEffect(() => {
        if (allData.length > 0) {
            // console.log("called")
            dispatch(cardData(allData)); // Dispatching an action
            dispatch(originalData(allData));
        
        }
    }, [allData]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight && pageId < 3) {
                // User has scrolled to the bottom of the page and there are more pages to load
                setPageId(prevPageId => prevPageId + 1); // Incremental pageId
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pageId]);

    if (loading && !data && allData.length === 0) {
        return <div><Shimmer/></div>; // Initial loading , we can use any spinner also
    }

    if (error) {
        // return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Header />
            <div className='body'>
                {movieList.map((pageData, index) => (
                    <div key={uuidv4()}>
                        {/* as we don't have any key from the backend api i'm 
                        just using uui, although it is not recomended, it reduces 
                        the performance of our application */}
                        <Cards pageData={pageData}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
