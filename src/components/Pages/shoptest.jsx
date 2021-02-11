import React,  { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
//utils
import { selectCollectioinForPreview } from '../../Redux/Shop/shop.selector'
//images
import imageBackground from '../../assets/images/page-header-bg.jpg'
//component
import CollectionHolder from '../Product/collection-holder'

const ShopTest = ({ collections }) => {
    
    const [userSelect, setSelected] = useState('title')
   

    const handleRadioSelect = (event) => {
        const selectedValue = event.target.value;
      console.log(selectedValue);

    }





// var collectionArraywithObjects = collections.map(item => ({ id : item.id, title: item.title, items:{ ...item.items}}))
// var collectionItems ={...collectionArraywithObjects}
// console.log(collectionItems);

    return (

        <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: `url(${imageBackground})` }}>
                <div className="container">
                    <h1 className="page-title">Fashion Test<span>Shop</span></h1>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="/">Shop</a></li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="toolbox">
                        <div className="toolbox-left">
                        
                        </div>
                        <div className="toolbox-center">
                            <div className="toolbox-info">
                                Showing <span>All</span> Products
                            </div>
                        </div>

                        <div className="toolbox-right">
                            <div className="toolbox-sort">
                                <label for="sortby">Sort by:</label>
                                <div className="select-custom">
                                    <select  className="form-control">
                                        <option value="title" onClick ={handleRadioSelect}>Title</option>
                                        <option value="name">Name</option>
                                        {/* <option value="date">Date</option> */}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products">
                    
                        <div className="row">

                            {collections.map(({ id, ...otherCollectionProps }) => (
                                <CollectionHolder key={id} {...otherCollectionProps} />
                            ))}


                        </div>

                        <div className="load-more-container text-center">
                            <a href="/" className="btn btn-outline-darker btn-load-more">More Products <i className="icon-refresh"></i></a>
                        </div>
                    </div>

                 
                  
                </div>
            </div>
        </main>


    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectioinForPreview
})

export default connect(mapStateToProps)(ShopTest);
