// 'use client'

import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'
import Image from 'next/image'
import Arrow from './svg/Arrow'
import { GradientLight } from './design/Benefits'
import ClipPath from './svg/ClipPath'

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          title="Chat Smarter, Not Harder with Brainwave"
          className="md:max-w-md lg:max-w-2xl text-center"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="group block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            >
              <div className=" relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 group-hover:bg-n-8 opacity-0 transition-opacity group-hover:opacity-50"
                style={{ clipPath: 'url(#benefits)' }}
              >
                <div className="absolute inset-0 opacity-20 ">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover saturate-0"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits
