import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import Link from 'next/link'
import { IoLogoJavascript } from 'react-icons/io'
import { FaVuejs } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
// import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  const icons = {
    javascript: <IoLogoJavascript />,
    vue: <FaVuejs />,
    react: <SiReact />,
    nextjs: <TbBrandNextjs />,
  }
  return (
    <article className="md:grid md:grid-cols-2 md:items-baseline">
      {/* <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Leer artículo </Card.Cta>
      </Card> */}
      <Link
        className="rounded-3xl border border-zinc-100 bg-slate-50 dark:border-zinc-700/40 dark:bg-transparent md:col-span-2"
        href={`/articles/${article.slug}`}
      >
        {/* {article.title} */}
        {article.background !== undefined ? (
          <div
            className={`flex h-12 w-full flex-row-reverse rounded-tr-3xl rounded-tl-3xl py-3 px-6 text-2xl`}
            style={{ backgroundColor: article.background }}
          >
            {icons[article.icon]}
          </div>
        ) : null}
        <div className=" w-full p-6">
          <h2 className="text-xl font-semibold text-zinc-600 dark:text-white">
            {article.title}
          </h2>
          <Card.Description>{article.description}</Card.Description>
          <Card.Cta>Leer artículo </Card.Cta>
        </div>
      </Link>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Spencer Sharp</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Ven y conoce los recursos escritos que Armex tiene para ti."
        intro="Si quieres contribuir con el desarrollo de la comunidad, puedes escribir un artículo y compartirlo con nosotros."
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
