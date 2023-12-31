import React from 'react';
// Profile Image
import Image from '../assets/avatar.webp'
// icons
import { FaGithub, FaLinkedin, FaDribbble, } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'
// link
import { Link } from 'react-scroll';
// useContext
import { useContext } from 'react';
import { deviceContext } from '../contexts/deviceContext';

const Banner = () => {
  const initial = useContext(deviceContext);

  return (
    <section className='min-h-[50vh] mb-10 lg:min-h-[75vh] max-h-[100vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='items-center flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            {/* Name */}
            <motion.h1
              variants={fadeIn('down', 0.3)}
              initial={initial}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'
            >
              SOHAIB <span>AHMAD</span>
            </motion.h1>
            {/* I am type aimation */}
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial={initial}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Engineer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            {/* Subtext */}
            <motion.p
              variants={fadeIn('down', 0.5)}
              initial={initial}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Empower Your Brand's Story and unleash the Power of Web Design, Tailored to Enchant and Captivate Your Customers.
            </motion.p>
            {/* Buttons */}
            <motion.div
              variants={fadeIn('down', 0.5)}
              initial={initial}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link
                to='contact'
                smooth={true}
              >
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <Link
                to='work'
                smooth={true}
                className='text-gradient btn-link cursor-pointer'
              >
                My Portfolio
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('down', 0.7)}
              initial={initial}
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[25px] gap-x-8 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.linkedin.com/in/engr-sohaib/' target='_blank'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/SohaibA786' target='_blank'>
                <FaGithub />
              </a>
              <a href='https://dribbble.com/Sohaib_Ahmad_7' target='_blank'>
                <FaDribbble />
              </a>
              <a href="mailto:maliksohaib.official@gmail.com" target='_blank'>
                <MdEmail />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial={initial}
            whileInView={'show'}
            className=' lg:flex flex-1 min-h-[214px] max-w-[200px] lg:max-w-[482px]'>
            <img src={Image} alt='Engineer Sohaib Ahmad' />
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
