import glob from 'fast-glob';

interface Author {
  name: string;
  role: string;
  image: string;
  link: string;
}

interface Article {
  title: string;
  description: string;
  author: Author;
  date: string;
  tags: string[];
  readingTime: string;
  imgPreview: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/blog/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './app/blog',
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
