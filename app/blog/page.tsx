import { type Metadata } from 'next';

import { Card } from '../components/CardBlog';
import { SimpleLayout } from '../components/SimpleLayout';
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="rounded-lg bg-slate-50 p-4 shadow md:grid md:grid-cols-4 md:items-baseline">
      <Card className="gap-2 md:col-span-4">
        <Card.ImgPreview
          imageUrl={article.imgPreview}
          altText={`${article.title} image preview`}
        />
        <div className="mt-2 flex items-center justify-center space-x-2">
          <Card.Eyebrow as="time" dateTime={article.date}>
            {formatDate(article.date)}
          </Card.Eyebrow>
          {article?.tags?.map(tag => <Card.Tag key={tag} tag={tag} />)}
        </div>

        <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
        <div className=" py-2">
          <Card.Description>{article.description}</Card.Description>
        </div>
        <Card.Author
          name={article.author.name}
          position={article.author.role}
          imageUrl={article.author.image}
        />
        <Card.Cta>Read article</Card.Cta>
      </Card>
    </article>
  );
}

// export const metadata: Metadata = {
//   title: 'Blog | Publed',
//   description:
//     'Find out more about Publed and stay tuned for all the announcements and information from our experts in the space.',
// };

export default async function ArticlesIndex() {
  let articles = await getAllArticles();

  return (
    <SimpleLayout
    >
      <header className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Find out more about Publed and stay tuned for all the announcements and information from our experts in the space.</p>
        </div>
      </header>
      <div className="md:border-zinc-100 md:pl-6 mt-20 md:dark:border-zinc-700/40">
        <div className="grid max-w-none grid-cols-1 gap-4 md:grid-cols-3">
          {articles.map(article => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
