import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../components/aboutMe'
import Projects from '../components/projects'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Aaron Newman</title>
                <meta name="description" content="Aaron Newman Software Developer Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className='bg-blue-300 pt-12' id='about'>
                    <AboutMe />

                    <div className='grid grid-cols-2'>
                        <div className='bg-blue-300 skew-y-3 h-6'></div>
                        <div className='bg-blue-300 -skew-y-3 h-6'></div>
                    </div>
                </div>

                <div className='bg-blue-500 pt-12' id='projects'>
                    <div className='grid grid-cols-2'>
                        <div className='bg-blue-500 skew-y-3 h-6'></div>
                        <div className='bg-blue-500 -skew-y-3 h-6'></div>
                    </div>

                    <Projects />
                </div>

            </main>

            <footer className='relative text-center mt-8 mb-4'>
                <div className='inline-flex'>
                    <p>Developed By Aaron Newman</p>
                    
                    <a href="https://github.com/newman15?tab=repositories" target="_blank" rel='noopener noreferrer'>
                        <Image src="/github.svg" alt="Github Logo" width={50} height={50} />
                    </a>
                </div>
            </footer>
        </div>
    )
}
