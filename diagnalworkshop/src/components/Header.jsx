import React, { useState, useEffect, useRef } from "react";
import '../styles/header.css';
import { useSelector, useDispatch } from 'react-redux';
import backButton from "../assets/Back.png";
import searchBar from "../assets/search.png";
import { useNavigate } from "react-router-dom";
import { cardData } from '../redux/appSlice';

// to make the back button functional I have created a empty page so show the routing
function Header() {
    const navi = useNavigate();
    const [searchEnabled, setSearchEnabled] = useState(false);
    const [queryText, setQueryText] = useState('');
    const [search, setSearch] = useState([]);
    const movieList = useSelector(state => state.movieList.items);
    const originalData = useSelector(state => state.movieList.items2);
    const [tempData, seTempData] = useState([]);
    const dispatch = useDispatch();

    const navigate = () => {
        setQueryText(''); // Clear the search query
        setSearchEnabled(false); // Disable search
        dispatch(cardData(originalData)); // Dispatch the previous search results or data
        console.log("originalData",originalData)
    }

    useEffect(() => {
        setSearch(movieList);
        // Populate search with movieList on first render

    }, [movieList]);

    // implemented debouncing here for the optimized search functionality
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (queryText.trim() === '') {
                setSearch(movieList);
            } else {
                const filteredResults = movieList.map(innerArray =>
                    innerArray.filter(movie =>
                        movie.name.toLowerCase().includes(queryText.toLowerCase())
                    )
                );
                setSearch(filteredResults);
                console.log(filteredResults);
                dispatch(cardData(filteredResults));
                seTempData(movieList)
            }
        }, 800); // Adjust the debounce delay as needed (e.g., 800ms)

        // Clear the timeout if the user continues typing
        return () => clearTimeout(timeoutId);
    }, [queryText]);

    const handleSearch = () => {
        setSearchEnabled(!searchEnabled);
        if (!searchEnabled) {
            console.log("from search");
            // console.log(movieList);
            setSearch(movieList)
            //    console.log(search[0][0].name)
            console.log(search)
        }
    }

    const handleQuery = (e) => {
        const searchText = e.target.value;
        setQueryText(searchText);
        if (searchText.trim() === '') {
            // we can call the api again and update the redux so that 
            // when our serach box will be empty this will call again
            dispatch(cardData(tempData))
            //  console.log("tempData",tempData)
        }
    }

    return (
        <div className="ott-header-container">
            <img
                className="ott-header-back"
                src={backButton}
                alt="Back Icon"
                onClick={navigate}
            />

            <div className={searchEnabled ? "scroll-container" : "ott-header-title"}>
                <div className={searchEnabled ? "scroll-text" : ""}>Romantic Comedy</div>
            </div>

            {searchEnabled &&
                <input
                    placeholder="Search"
                    className="ott-header-input"
                    onChange={handleQuery}
                    type="text"
                    min={1}
                    maxLength={10}
                    value={queryText}
                />
            }

            <img
                className="ott-header-search"
                onClick={handleSearch}
                src={searchBar}
                alt="Search Icon"
            />

            {queryText.trim() !== '' && search.flat().length === 0 &&
                <div className="notFound">We didn't find any matches. Browse our most popular TV shows and movies</div>
            }


        </div>
    )
}

export default Header;
