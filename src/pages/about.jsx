import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/armex-about.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Armex</title>
        <meta name="description" content="Armex, un grupo de desarrolladores" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              ¿Qué nos motiva?
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Compartir conocimientos es uno de los aspectos más importantes
                para el crecimiento personal y profesional en cualquier área, y
                el desarrollo web no es una excepción. Es una disciplina en
                constante evolución, en la que nuevas tecnologías y herramientas
                surgen a diario, y la colaboración entre profesionales es
                fundamental para estar actualizados y mejorar nuestras
                habilidades.
              </p>
              <p>
                Es por eso que en esta página web, nuestra meta es crear
                recursos escritos que ayuden a aquellos que desean adentrarse en
                el mundo del desarrollo web, ofreciendo información clara y
                accesible sobre las distintas tecnologías y conceptos relevantes
                en esta área.
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                Nuestro objetivo
              </h2>
              <p>
                Nos hemos dado cuenta de que muchas personas, tanto
                principiantes como aquellos con más experiencia, encuentran
                dificultades al intentar aprender nuevas tecnologías o enfrentar
                problemas en su trabajo diario. Por eso, queremos ofrecer una
                solución a través de recursos educativos escritos que sean
                útiles para todos.
              </p>
              <p>
                Nuestro objetivo es crear una comunidad que fomente la
                colaboración y el intercambio de conocimientos, donde podamos
                aprender unos de otros y crecer juntos. Si quieres formar parte
                de este desafío no dudes en escribirnos. 🚀
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink> */}
              <SocialLink
                href="https://instagram.com/team_armex?igshid=MjkzY2Y1YTY="
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/ArmandLord"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jos%C3%A9-armando-p%C3%A9rez/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              {/* <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                spencer@planetaria.tech
              </SocialLink> */}
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
