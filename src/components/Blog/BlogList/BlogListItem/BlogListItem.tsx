import React from "react";

type Props = {
    element: any;
};

const BlogListItem = ({ element }: Props) => {
    return (
        <div>
            <div>{element.title}</div>
            {element.picture.visible && (
                <img src={element.picture.base} style={{ width: "230px", margin: "10px" }} alt={element.picture.alt} />
            )}
            <div>{element.content}</div>
        </div>
    );
};

export default BlogListItem;
