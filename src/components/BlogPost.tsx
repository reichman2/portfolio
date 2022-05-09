import { MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image, { ImageProps } from 'next/image';
import React from 'react';

export interface BlogPostProps {
    title: string;
    description?: string;
    date: string;
    author: string;
    content: MDXRemoteSerializeResult;
}

const ResponsiveImage = (props: any) => {
    return (
        <Image alt={ props.alt } layout="responsive" { ...props } />
    );
}

const components = {
    img: ResponsiveImage,
    Image,
    h1: (props: any) => <h1 className="text-3xl font-bold">{ props.children }</h1>,
    h2: (props: any) => <h2 className="text-2xl font-bold">{ props.children }</h2>,
    h3: (props: any) => <h3 className="text-xl font-bold">{ props.children }</h3>,
    h4: (props: any) => <h4 className="text-lg font-bold">{ props.children }</h4>,
    h5: (props: any) => <h5 className="text-md font-bold">{ props.children }</h5>,
    ol: (props: any) => <ol className="list-decimal">{ props.children }</ol>,
    ul: (props: any) => <ul className="list-disc">{ props.children }</ul>,
    li: (props: any) => <li className="my-2 ml-7">{ props.children }</li>,
    blockquote: (props: any) => <blockquote className="bg-gray-300 border-l-4 border-gray-800 p-2 pl-3 my-2 rounded-sm">{ props.children }</blockquote>,
}


const BlogPost: React.FC<BlogPostProps> = ({ title, description, date, author, content }) => {
    return (
        <div className="w-full py-8">
            <article className="mb-32 mx-auto lg:w-10/12 w-2/3">
                <h1 className="text-4xl my-2">{ title }</h1>
                <span className="block text-gray-700">{ date } &bull; { author }</span>
                <span className="block text-gray-700">{ description }</span>
                <span className="block my-6" />
                <MDXRemote { ...content } components={ components } />
            </article>
        </div>
    );
}
 
export default BlogPost;