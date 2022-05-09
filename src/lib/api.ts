import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const POST_DIR = path.join(process.cwd(), 'src', 'data', 'posts');


export const getPostSlugs = () => {
    return fs.readdirSync(POST_DIR);
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
    const slugNoExt = slug.replace(/\.mdx$/, '');
    const fullPostPath = path.join(POST_DIR, slugNoExt + '.mdx');
    const fileContents = fs.readFileSync(fullPostPath, 'utf-8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};

    fields.forEach((field) => {
        if (field == 'slug') {
            items[field] = slugNoExt;
        } else if (field == 'content') {
            items[field] = content;
        } else if (typeof data[field] !== undefined) {
            items[field] = data[field];
        }
    });

    return items;
}

export const getAllPosts = (fields: string[] = []) => {
    const slugs = getPostSlugs();
    const posts = slugs.map(slug => getPostBySlug(slug, fields)).sort((a, b) => ((a.date > b.date)? -1 : 1));
    return posts;
}