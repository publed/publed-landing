// Assuming generateMetadata is in /blog/metadata.ts
import { getAllArticles } from '@/lib/articles';

export async function generateMetadata(params: { slug: any }) {
  const { slug } = params;

  if (!slug) {
    // No slug provided, return default metadata for generic pages or homepage
    return {
      title: 'Welcome to Our Blog',
      description:
        'Find out more about Publed and stay tuned for all the announcements and information from our experts in the space.',
      imgPreview: 'hero_publed.png',

      date: new Date().toISOString(),
    };
  }

  const allArticles = await getAllArticles();
  const article = allArticles.find(article => article.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
      imgPreview: 'https://example.com/default-not-found-image.jpg',
      date: new Date().toISOString(),
    };
  }

  return {
    title: article.title,
    description: article.description,
    imgPreview: article.imgPreview,
    date: article.date,
  };
}
