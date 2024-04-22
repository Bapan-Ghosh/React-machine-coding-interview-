import React, { useState } from 'react'
import useApi from './useApi'
const Table = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const { val, unique } = useApi()  // custom hooks
    // console.log(unique)
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    //console.log(data)
    return (
        <div>
            <select onChange={handleCategoryChange}>
                <option value="">Select category</option>
                {unique && unique.map(item => <option value={item}>{item}</option>)}
            </select>

            <div className="table">
                <table>
                   {selectedCategory === "" ? "" : 
                   <thead>
                        <tr>
                            <th>API</th>
                            <th>Description</th>
                            <th>Auth</th>
                            <th>HTTPS</th>
                            <th>Cors</th>
                            <th>Link</th>
                        </tr>
                    </thead>}
                    <tbody>
                    {selectedCategory === "" ? <h1>waiting to be selected.....</h1> :
                         val.filter((item) => item.Category === selectedCategory)
                            .map((d, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{d.API}</td>
                                        <td>{d.Description}</td>
                                        <td>{d.Auth}</td>
                                        <td>{d.HTTPS}</td>
                                        <td>{d.Cors}</td>
                                        <td>{d.Link}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table