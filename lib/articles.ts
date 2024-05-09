import glob from 'fast-glob';

interface Author {
  name: string;
  role: string;
  image: string;
  link: string;
}

export interface ArticleMetadata {
  title: string;
  description: string;
  imgPreview: string;
  date: string;
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
  metadata: ArticleMetadata;
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  const { article, metadata } = (await import(
    `../app/blog/${articleFilename}`
  )) as {
    article: Article;
    metadata: ArticleMetadata;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
    metadata,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './app/blog',
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
