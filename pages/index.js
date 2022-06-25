import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../components/aboutMe'
import Projects from '../components/projects'
import Skills from '../components/skills'

import github from '../public/icons/github.svg';
import linkedIn from '../public/icons/LinkedIn.svg';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Aaron Newman</title>
                <meta name="description" content="Aaron Newman Software Developer Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=''>
                <div className='bg-blue-300 py-12 relative'>
                    {/* anchor tag and its class (with relative parent) to display padding above element when clicked in navbar */}
                    <a id='about' className='absolute -top-20'></a>
                    <AboutMe />
                </div>

                <div className='py-12 relative'>
                    <a id='skills' className='absolute -top-20'></a>
                    <Skills />
                </div>

                <div className='bg-blue-500 py-12 relative'>
                    <a id='projects' className='absolute -top-20'></a>
                    <Projects />
                </div>

            </main>

            <footer className='relative text-center mt-8 mb-4'>
                <div className='inline-flex items-center'>
                    <p className='pr-2'>Developed By Aaron Newman</p>
                    
                    <a className='pr-2' href="https://github.com/newman15?tab=repositories" target="_blank" rel='noopener noreferrer'>
                        <Image src={github} alt="Github Logo" width={50} height={50} />
                    </a>

                    <a href="https://www.linkedin.com/in/aaron-newman-897141133/" target="_blank" rel='noopener noreferrer'>
                        <Image src={linkedIn} alt="Github Logo" width={50} height={50} />
                    </a>
                </div>
            </footer>
        </div>
    )
}
