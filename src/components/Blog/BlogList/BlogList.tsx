import { blogList } from "../../../utils/dev/blog_list";
import BlogListItem from "./BlogListItem/BlogListItem";

type Props = {};

const BlogList = (props: Props) => {
    return (
        <div style={{ width: "250px", border: "1px solid #BB00EE" }}>
            {blogList.map((element) => {
                return <BlogListItem element={element} />;
            })}
        </div>
    );
};

export default BlogList;
