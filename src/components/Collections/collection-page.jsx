import React from 'react'
import { connect } from 'react-redux'
//utils
import { selectCollection, selectCollectioinForPreview } from '../../Redux/Shop/shop.selector'
//images
import imageBackground from '../../assets/images/page-header-bg.jpg'
//components

import CollectionHolder from '../Product/collection-holder'


const CollectionPage = ({ collection, collections }) => {
    const { title } = collection;

    return (

        <main className="main">
            <div className="page-header text-center" style={{ backgroundImage: `url(${imageBackground})` }}>
                <div className="container">
                    <h1 className="page-title">{title}<span>Shop</span></h1>
                </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/">Shop</a></li>

                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="toolbox">
                        <div className="toolbox-left">
                            <span className="sidebar-toggler"><i className="icon-bars"></i>Filters</span>
                        </div>
                        <div className="toolbox-center">
                            <div className="toolbox-info">
                                Showing <span>{title}</span> Products
                            </div>
                        </div>

                        <div className="toolbox-right">
                            <div className="toolbox-sort">
                                <label for="sortby">Sort by:</label>
                                <div className="select-custom">
                                    <select name="sortby" id="sortby" className="form-control">
                                        <option value="popularity" selected="selected">Most Popular</option>
                                        <option value="rating">Most Rated</option>
                                        <option value="date">Date</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products">

                        <div className="row">

                            {/* {items.map(item => (
                                <ShopProduct key={item.id} item={item} />
                            ))} */}

                            {collections.map(({ id, ...otherCollectionProps }) => (
                                <CollectionHolder key={id} {...otherCollectionProps} />
                            ))}

                        </div>

                        <div className="load-more-container text-center">
                            <a href="/" className="btn btn-outline-darker btn-load-more">More Products <i className="icon-refresh"></i></a>
                        </div>
                    </div>

                    <div className="sidebar-filter-overlay"></div>
                    <aside className="sidebar-shop sidebar-filter">
                        <div className="sidebar-filter-wrapper">
                            <div className="widget widget-clean">
                                <label><i className="icon-close"></i>Filters</label>
                                <a href="/" className="sidebar-filter-clear">Clean All</a>
                            </div>
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                                        Category
                                    </a>
                                </h3>

                                <div className="collapse show" id="widget-1">
                                    <div className="widget-body">
                                        <div className="filter-items filter-items-count">
                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-1" />
                                                    <label className="custom-control-label" for="cat-1">Dresses</label>
                                                </div>
                                                <span className="item-count">3</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-2" />
                                                    <label className="custom-control-label" for="cat-2">T-shirts</label>
                                                </div>
                                                <span className="item-count">0</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-3" />
                                                    <label className="custom-control-label" for="cat-3">Bags</label>
                                                </div>
                                                <span className="item-count">4</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-4" />
                                                    <label className="custom-control-label" for="cat-4">Jackets</label>
                                                </div>
                                                <span className="item-count">2</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-5" />
                                                    <label className="custom-control-label" for="cat-5">Shoes</label>
                                                </div>
                                                <span className="item-count">2</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-6" />
                                                    <label className="custom-control-label" for="cat-6">Jumpers</label>
                                                </div>
                                                <span className="item-count">1</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-7" />
                                                    <label className="custom-control-label" for="cat-7">Jeans</label>
                                                </div>
                                                <span className="item-count">1</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-8" />
                                                    <label className="custom-control-label" for="cat-8">Sportwear</label>
                                                </div>
                                                <span className="item-count">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget widget-collapsible">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
                                        Size
                                    </a>
                                </h3>

                                <div className="collapse show" id="widget-2">
                                    <div className="widget-body">
                                        <div className="filter-items">
                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="size-1" />
                                                    <label className="custom-control-label" for="size-1">XS</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="size-2" />
                                                    <label className="custom-control-label" for="size-2">S</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" checked id="size-3" />
                                                    <label className="custom-control-label" for="size-3">M</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" checked id="size-4" />
                                                    <label className="custom-control-label" for="size-4">L</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="size-5" />
                                                    <label className="custom-control-label" for="size-5">XL</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="size-6" />
                                                    <label className="custom-control-label" for="size-6">XXL</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget widget-collapsible">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
                                        Colour
                                    </a>
                                </h3>

                                <div className="collapse show" id="widget-3">
                                    <div className="widget-body">
                                        <div className="filter-colors">
                                            <a href="/" style={{ background: '#b87145' }}><span className="sr-only">Color Name</span></a>
                                            <a href="/" style={{ background: '#f0c04a' }}><span className="sr-only">Color Name</span></a>
                                            <a href="/" style={{ background: '#333333' }}><span className="sr-only">Color Name</span></a>
                                            <a href="/" className="selected" style={{ background: '#cc3333' }}><span className="sr-only">Color Name</span></a>
                                            <a href="/" style={{ background: '#3399cc' }}><span className="sr-only">Color Name</span></a>
                                            <a href="/" style={{ background: '#669933' }}><span className="sr-only">Color Name</span></a>
                                            <a href="/" style={{ background: '#f2719c' }}><span className="sr-only">Color Name</span></a>
                                            <a href="/" style={{ background: '#ebebeb' }}><span className="sr-only">Color Name</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget widget-collapsible">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                                        Brand
                                    </a>
                                </h3>

                                <div className="collapse show" id="widget-4">
                                    <div className="widget-body">
                                        <div className="filter-items">
                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="brand-1" />
                                                    <label className="custom-control-label" for="brand-1">Next</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="brand-2" />
                                                    <label className="custom-control-label" for="brand-2">River Island</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="brand-3" />
                                                    <label className="custom-control-label" for="brand-3">Geox</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="brand-4" />
                                                    <label className="custom-control-label" for="brand-4">New Balance</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="brand-5" />
                                                    <label className="custom-control-label" for="brand-5">UGG</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="brand-6" />
                                                    <label className="custom-control-label" for="brand-6">F&F</label>
                                                </div>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="brand-7" />
                                                    <label className="custom-control-label" for="brand-7">Nike</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget widget-collapsible">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                                        Price
                                    </a>
                                </h3>

                                <div className="collapse show" id="widget-5">
                                    <div className="widget-body">
                                        <div className="filter-price">
                                            <div className="filter-price-text">
                                                Price Range:
                                                <span id="filter-price-range"></span>
                                            </div>

                                            <div id="price-slider"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>


    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    collections: selectCollectioinForPreview
});

export default connect(mapStateToProps)(CollectionPage);
