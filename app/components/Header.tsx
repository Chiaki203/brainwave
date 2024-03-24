'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { navigation } from '../constants'
import useHash from './hooks/useHash'
import Button from './Button'
import MenuSvg from './svg/MenuSvg'
import { HamburgerMenu } from './design/Header'

const Header = () => {
  const _hash = useHash()
  const [hash, setHash] = useState(_hash || '')
  const [openNavigation, setOpenNavigation] = useState(false)
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }
  const handleClick = () => {
    if (!openNavigation) return
    enablePageScroll()
    setOpenNavigation(false)
  }
  useEffect(() => {
    setHash(_hash || '')
  }, [_hash])
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 lg:bg-n-8/90 lg:backdrop-blur-sm border-b border-n-6 ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" href="#hero">
          <Image
            src="/assets/brainwave.svg"
            width={190}
            height={40}
            alt="Brainwave"
          />
        </Link>
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 ${
                  item.onlyMobile ? 'lg:hidden' : ''
                } ${item.url === hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}`}
                onClick={() => {
                  setHash(item.url)
                  handleClick()
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <Link
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block "
        >
          New Account
        </Link>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  )
}

export default Header
