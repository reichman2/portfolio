import { MDXRemoteSerializeResult } from "next-mdx-remote/dist"

type PostType = {
    slug: string;
    title: string;
    date: string;
    author: string;
    exerpt?: string;
    description?: string;
    content: MDXRemoteSerializeResult;
}

export default PostType