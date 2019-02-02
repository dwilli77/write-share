import React from 'react';

const StaticSidebar = props => {
    return (
        <div className="side-nav collection col s3">
            <p className="collection-item">Helpful Links</p>
            <a href="https://thestorystarter.com" className="collection-item" target="_blank">Story Starter</a>
            <a href="https://pw.org/content/literary-magazines" className="collection-item" target="_blank">Literary Magazines</a>
            <a href="https://copyright.gov" className="collection-item" target="_blank">copyright.org</a>
            <a href="https://writingcenter.unc.edu/tips-and-tools/group-writing/" className="collection-item" target="_blank">Tips</a>
        </div>
    )
}

export default StaticSidebar;