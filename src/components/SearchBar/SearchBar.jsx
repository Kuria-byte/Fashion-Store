import React from 'react'

const SearchBar = () => {
   


    return (
        <div>
            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                <span className="search-toggle" role="button"><i className="icon-search"></i></span>

                <div className="header-search-wrapper search-wrapper-wide">
                    <label className="sr-only">Search</label>
                    <button className="btn btn-primary" type="submit"><i className="icon-search" ></i></button>
                    <input type="text" className="form-control" name="search"  placeholder="Search product ..." required />
                </div>

            </div>
        </div>
    )
}

export default SearchBar
