import matter from 'gray-matter';
import Link from 'next/link';
import Card from "./Card";


interface BlogPostCardProps {
    title: string;
    description?: string;
    slug: string;
    date: string;
    author: string;
    content?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, description, date, author, slug }) => {
    return (
        <Card>
            <Link href={ `/blog/${slug}` }><a><h1 className="text-black text-lg">{ title }</h1></a></Link>
            <span className="text-gray-700 text-sm block">{ author } &bull; { date }</span>
            <span className="text-gray-900 text-xs">{ description }</span>
        </Card>
    );
}
 
export default BlogPostCard;