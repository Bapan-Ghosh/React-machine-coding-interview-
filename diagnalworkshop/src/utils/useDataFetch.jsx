import { useEffect, useState, useMemo } from "react";
// this is bascially a custom hooks , where us write custom logic
// I have used fetch here to fetch the data from the API (built into JavaScript).
// we can also use external library (axios) which comes with many more functionalities 
const useDataFetch = (id) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://test.create.diagnal.com/data/page${id}.json`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData.page['content-items'].content);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        // console.log("Called")
        fetchData();

        // Cleanup function
        return () => {
            // You can cancel any pending fetch requests here if necessary
        };

    }, [id]);

    // Memoize data to prevent unnecessary re-renders
    const memoizedData = useMemo(() => data, [data]);

    return { data: memoizedData, loading, error };  // returning like a normal js arrow fn
};

export default useDataFetch;
