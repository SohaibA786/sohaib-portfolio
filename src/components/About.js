import React from 'react';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
// useEffect
import { useEffect, useState } from 'react';


const About = () => {
  const [meme, setMeme] = useState("https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png");
  useEffect(() => {
    const fetchMemes = async () => {
      const response = await fetch('https://meme-api.com/gimme/wholesomememes');
      const data = await response.json();
      if (data.nsfw) setMeme("https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png");
      else setMeme(data.url);
    }
    fetchMemes();
  }, []);

  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='hidden lg:block flex-1 bg-about bg-contain bg-no-repeat h-[100%] mix-blend-lighten bg-center'>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            {/* Headline */}
            <h3 className='h3 mb-4'>
              I'm a Meta Cert. Developer with over 2 years of experience.
            </h3>
            {/* About me Text */}
            <p className='mb-6 text-justify'>
              For the past year, I've been remotely working as Lead Developer with an American Organization <a target='_blank' className='text-accent font-bold' href='https://cfored.ac-page.com/landing-page-ac#'>CED</a>. Additionally I'm providing my services on freelance platforms which include but are not limited to web development, UX/UI designing,  embedded systems programming, IOT solutions, 3D modeling and simulations.<br />
              {/* Bars 🔥 */}
              <span className='text-gradient text-[15px] text-center block'>
                Engineering is my superpower, and I wield it with style<br />
                Just tell me your problem, and we'll turn it into a smile
              </span>
            </p>
            {/* Buttons */}
            <div className='flex flex-col gap-y-8 lg:flex-row gap-x-8 items-center'>
              <a href={meme} target='_blank'><button onClick={() => {
                const fetchMemes = async () => {
                  const response = await fetch('https://meme-api.com/gimme/wholesomememes');
                  const data = await response.json();
                  if (data.nsfw) setMeme("https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png");
                  else setMeme(data.url);
                }
                fetchMemes();
              }}
                className='btn btn-lg '
              >
                Wanna Smile :)
              </button>
              </a>
              <a href='https://linkedin.com/in/engr-sohaib' target='_blank' className='hidden lg:block text-gradient btn-link'>
                My Certifications
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;