import React from 'react'

const Search=(props)=>{
    const { term,handleChange }=props

    return (
        <div className="row mb-3" >
            <input type="text" value={term} className="form-control" onChange={handleChange} placeholder="search by name or email-id" />
        </div>
    )
}

export default Search