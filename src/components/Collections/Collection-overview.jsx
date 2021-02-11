import React from 'react'
// utils
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../Redux/Directory/directory.selector'
// component
import CollectionPreview from './Collection-preview'

const CollectionOverview = ({ sections }) => {
    return (

        <div className='pt-2 pb-3' style={{ display: 'block' }}>
            <div className='container'>
                <div className='row'>
                    {sections.filter((sections, id, ...otherSectionProps) => id> 2).map(({ id, ...otherSectionProps }) => (
                        <CollectionPreview key={id} {...otherSectionProps} />
                    ))}
                </div>
                <hr className='mt-0 mb-0' />
            </div>
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections

})

export default connect(mapStateToProps)(CollectionOverview)
