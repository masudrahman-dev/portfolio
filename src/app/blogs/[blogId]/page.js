import React from 'react';

const singleBlogPage = ({params}) => {
console.log(params);
    return (
        <div>
            singleBlogPage {params.blogId}
        </div>
    );
};

export default singleBlogPage;