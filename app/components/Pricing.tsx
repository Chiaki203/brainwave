import React from 'react'
import Section from './Section'
import Image from 'next/image'
import { smallSphere, stars } from '@/public/assets'
import Heading from './Heading'
import PricingList from './PricingList'
import { LeftLine, RightLine } from './design/Pricing'

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={smallSphere}
            alt="sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <Image
              src={stars}
              alt="Stars"
              width={950}
              height={400}
              className="w-full"
            />
          </div>
        </div>
        <Heading
          title="Pay once, use forever"
          tag="Get started with Brainwave"
          className="md:text-center"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
