import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import ErrorPage from 'next/error';
import Layout from "src/templates/Layout";
import BlogPost from 'src/components/BlogPost';
import PostType from 'src/types/post';
import { getAllPosts, getPostBySlug } from 'src/lib/api';


export interface PostProps {
    post: PostType;
}


const Post: React.FC<PostProps> = ({ post }) => {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return (
            <ErrorPage statusCode={ 404 } />
        );
    }

    return (
        <Layout currPage="Blog">
            <BlogPost 
                title={ post.title } 
                author={ post.author }
                date={ post.date }
                content={ post.content }
            />
        </Layout>
    )
}

export default Post;


type Params = {
    params: {
        slug: string;
    }
};

export const getStaticProps = async ({ params }: Params) => {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'description'
    ]);

    const content = await serialize(post.content) || '';

    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    };
}

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug']);
    
    return {
        paths: posts.map(post => {
            return {
                params: {
                    slug: post.slug as string
                }
            }
        }),
        
        fallback: false
    };
}