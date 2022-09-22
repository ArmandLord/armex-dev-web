import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { BsFillSignpost2Fill } from 'react-icons/bs'

import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.png'
import { Fragment, useEffect, useRef } from 'react'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M60 120c33.137 0 60-26.863 60-60S93.137 0 60 0 0 26.863 0 60s26.863 60 60 60z"
        fill="#FCE5AC"
      />
      <path
        d="M58.34 4.58c-.02 1.36-3.4 2.23-7.38 2.6-3.98.37-7.3.11-7.65-1.2-.35-1.31 2.69-3.26 7.03-3.68 4.34-.42 8.01.92 8 2.28zm57.03 50.89c-.01-.4.01-.8.08-1.21 1.22-7.23 1.8-14-6.32-18.14-.89-.46-1.87-.83-2.55-1.57-1.25-1.35-1.14-3.41-1.46-5.22-.97-5.54-7.24-9.51-12.66-8.01-1.78.49-3.64 1.47-5.35.8-1.38-.54-2.16-1.97-2.94-3.23-2.21-3.58-5.6-6.76-9.77-7.34-4.17-.59-8.91 2.3-9.17 6.5-.11 1.83.2 3.99 1.6 5.18 5.88 5.01 9.52 1.32 12.25 3.91 3.17 3.01-3.41 3.82-2.32 11.47.55 3.82 4.34 7.4 8.19 7.08 1.71-.15 4.31-.24 5.26 1.19.75 1.12.56 2.19.56 4.03 0 4.54.5 8.11 4.92 9.14.57.13 1.19.2 1.72-.03 1.17-.51 1.16-2.08 1.08-3.36-.35-5.62-4.31-6.76-5.03-9.85-.91-3.94 4.47-9.27 8.87-7.78 3.5 1.19.65 5.25 3.21 9.94 1.69 3.11 5.01 4.54 6.24 7.08 1.23 2.54.09 4.3.69 5.91.93 2.52 2.41 2.56 3.24 1.67.91-.97.61-2.96.39-4.12-.24-1.35-.69-2.67-.73-4.04zM20.24 98.04c.11-.16.99-.39 2.01.57 1.02.95 4.03 3.79 5.23 4.88 1.2 1.09.03 2.01-.97 1.83-4.8-.84-7.42-5.61-6.27-7.28zm17.8 12.38c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7c1.51.59.74 1.86-.25 2.06-4.8.92-8.94-2.6-8.46-4.57zm6.26-3.58c.6.47 1.21 1.21.93 1.91-.26.64-1.08.81-1.77.83-2.28.07-4.56-.51-6.55-1.6-1.4-.77-5.07-3.14-4.55-5.13.74-2.82 10.4 2.8 11.94 3.99zM93.71 102c-.22-.13-.6-1.22.58-2.57 1.18-1.35 4.68-5.33 6.01-6.92 1.33-1.59 2.66-.18 2.52 1.09-.7 6.11-6.79 9.73-9.11 8.4zm11.3-11.81c-.2-.04-.77-.78-.21-2.12s2.23-5.29 2.85-6.84c.62-1.56 2-.82 2.21.2 1.02 4.86-2.73 9.19-4.85 8.76zM82.51 9.32c-.04.2-.79.79-2.12.27s-5.25-2.1-6.8-2.68c-1.55-.58-.79-1.98.22-2.22 4.88-1.15 9.16 2.49 8.7 4.63zm-30.04 2.15c-9.5-1.73-12.9 3.96-15.81 5.2-2.32.98-3.92-.73-7.5 1.46-4.94 3.01-3.07 5.19-3.52 7.74-.46 2.55-3.19 3.64-5.19 3.83-2.37.23-2.56-1.21-1.42-2.94.63-.95 1.3-1.54 1.62-2.66.37-1.3.17-2.7.89-3.9 1.13-1.88 3.77-2.14 5.4-3.6 1.18-1.06 1.75-2.69 3.01-3.66 1.26-.97 2.9-1.32 4.47-1.6 3.2-.57 5.9-3.09 4.45-3.17-1.46-.08-3.89-.55-5.93.95-2.27 1.66-5.32 2.18-7.73 3.55-2.7 1.55-4.12 4.92-4.94 5.83-.82.91-3.46 1-5.28 2.88-3.8 3.89-10.14 18.02-10.14 23.31 0 4.93 2.19 9.75 7.08 11.09.74.2 1.53.43 2.01 1.03 1.1 1.37-1.65 5.49-2.07 7.15-1.07 4.3.1 7.61 2 9.98 4.11 5.11 8.21 4.42 12.33 1.89 1-.62 1.86-1.49 2.97-1.9 2.34-.87 2.4.63 2.63 2.38 1.08 8.06 4.43 10.14 6.78 11.05 4.89 1.89 10.9.09 14.08-4.08 3.18-4.17 3.53-10.4.66-14.79-4.38-6.7-13.03-7.07-14.78-10.82-1.97-4.22 3.48-4.81 5.86-8.47 2.12-3.25 2.56-7.72.54-11.08-1-1.66-2.66-3.32-2.24-5.21.47-2.11 6.48-5.42 10.95-9.26 3.18-2.72 10.63-10.03-1.18-12.18zM22.01 44.86c-.34.65-.85 1.3-1.58 1.41-.69.1-1.35-.34-1.78-.89-.68-.89-.88-2.14-.45-3.17.51-1.24 2.25-2.23 3.6-1.65.73.31.95 1.05.91 1.86-.05.89-.4 1.86-.7 2.44zm15.5 2.94c-.14.79-.39 1.55-.57 2.07-.49 1.45-1.2 2.97-2.57 3.64-.6.3-1.27.4-1.93.51-1.37.21-3.08.28-3.79-.91-.26-.43-.32-.95-.37-1.45-.23-2.16-.34-4.67 1.25-6.14 1.14-1.06 2.42-.93 3.84-.94.8 0 2.73-.26 3.41.18.91.59.94 1.85.73 3.04z"
        fill="#F1C688"
      />
    </svg>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              {/* <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2> */}
              <BsFillSignpost2Fill className="h-6 w-6 flex-none text-zinc-400 dark:text-zinc-500" />
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/about">Nosotros</MobileNavItem>
                <MobileNavItem href="/articles">Artículos</MobileNavItem>
                {/* <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/speaking">Speaking</MobileNavItem>
                <MobileNavItem href="/uses">Uses</MobileNavItem> */}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-sky-500 dark:text-sky-400'
            : 'hover:text-sky-500 dark:hover:text-sky-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/40 dark:to-sky-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about">Nosotros</NavItem>
        <NavItem href="/articles">Artículos</NavItem>
        {/* <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/speaking">Speaking</NavItem>
        <NavItem href="/uses">Uses</NavItem> */}
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-sky-50 [@media(prefers-color-scheme:dark)]:stroke-red-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-red-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-red-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-sky-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-sky-500" />
    </button>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
        priority
      />
    </Link>
  )
}

export function Header() {
  let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? 1 : 0)
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles, { passive: true })
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{ position: 'var(--header-position)' }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: 'var(--header-inner-position)' }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute left-0 top-3 origin-left transition-opacity"
                    style={{
                      opacity: 'var(--avatar-border-opacity, 0)',
                      transform: 'var(--avatar-border-transform)',
                    }}
                  />
                  <Avatar
                    large
                    className="block h-16 w-16 origin-left"
                    style={{ transform: 'var(--avatar-image-transform)' }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{ position: 'var(--header-position)' }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: 'var(--header-inner-position)' }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
