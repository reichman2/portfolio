import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import BlogPost from 'src/components/BlogPost';
import Masonry from 'react-masonry-css';
import Layout from "src/templates/Layout";
import { getAllPosts } from 'src/lib/api';
import PostType from 'src/types/post';
import BlogPostCard from 'src/components/BlogPostCard';



export interface BlogProps {
    posts: PostType[];
}
 
const Blog: React.FC<BlogProps> = ({ posts }) => {
    const blogPosts = null;

    const bpCols = {
        default: 2,
        860: 1
    };

    let blogNodes = posts.map((elm, i) => {
        return (
            <BlogPostCard key={ i } title={ elm.title } description={ elm.description } date={ elm.date } author={ elm.author } slug={ elm.slug } />
        );
    });


    return (
        <Layout currPage="Blog">
            <div className="pt-8 px-4 md:px-8 lg:px-12 min-h-screen">
                <Masonry 
                  breakpointCols={ bpCols }
                  className="skill-masonry"
                  columnClassName="skill-masonry-col lg:px-6"
                >
                    { blogNodes }
                </Masonry>
            </div>
        </Layout>
    );
}
 
export default Blog;


export async function getStaticProps() {
    const posts = getAllPosts(['title', 'date', 'slug', 'author', 'description']);

    return {
        props: {
            posts
        }
    }
}
