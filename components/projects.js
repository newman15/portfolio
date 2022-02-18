import { useState } from "react";
import Image from "next/image";
import bookBudzSmall from '../public/bookBudz-small.png';
import uniqueCombinations from '../public/uniqueCombinations.png';
import hangman from '../public/hangman.png';
import htmlIcon from '../public/html.svg';
import cssIcon from '../public/css.svg';
import githubIcon from '../public/github2.svg';
import javascriptIcon from '../public/javascript.svg';
import mongoIcon from '../public/mongoDB.svg';
import nextAuthIcon from '../public/next-auth.png';
import nextIcon from '../public/nextjs.svg';
import npmIcon from '../public/npm.svg';
import reactIcon from '../public/react.svg';
import vercelIcon from '../public/vercel.svg';
import tailwindIcon from '../public/tailwind.svg'

export default function Projects() {

    // Hooks that control the view state of the respective projects
    const [expandBookBudz, setExpandBookBudz] = useState(false);
    const [expandCombos, setExpandCombos] = useState(false);
    const [expandHangman, setExpandHangman] = useState(false);

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-2xl p-6 underline underline-offset-4'>Projects</h1>

            <div className='md:grid grid-cols-3 gap-8 text-center mx-4'>

                {/* Project: Book-Budz */}
                <div>
                    <div className='border-4 rounded-full overflow-hidden'>
                        <Image 
                            src={bookBudzSmall}
                            alt='Book Budz Image'
                            layout='responsive'
                        />
                    </div>

                    <h2 className='text-xl m-4'>Book-Budz</h2>

                    <div>
                        <p className='text-left'>
                            Browse and search from thousands of books on the Google Book Store. Search by author, title 
                            and ISBN. Secure sign in with Google OAuth, interact with Google Books API, and store your favorite 
                            books in your personal book board.
                        </p>

                        <span className={`${!expandBookBudz ? "hidden" : "block m-4"}`}>
                            View the website here: 
                            <a href="https://book-budz.vercel.app/" target="_blank" rel="noopener noreferrer" 
                            className='text-stone-700 hover:text-white hover:underline-offset-4'>{' '}Book-Budz
                            </a>

                            {/* List of technologies used */}
                            <div className='grid grid-cols-3 m-4'>
                                <div className='p-4'>
                                    <Image 
                                        src={reactIcon}
                                        alt='ReactIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={nextIcon}
                                        alt='NextIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={nextAuthIcon}
                                        alt='NextAuthIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={javascriptIcon}
                                        alt='JavascriptIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={tailwindIcon}
                                        alt='TailwindIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={htmlIcon}
                                        alt='HtmlIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={mongoIcon}
                                        alt='MongoIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={npmIcon}
                                        alt='NpmIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={vercelIcon}
                                        alt='VercelIcon'
                                        layout='responsive'
                                    />
                                </div>
                            </div>
                        </span>
                    </div>

                    <button className='mt-2 mb-8 text-white font-bold' onClick={
                        (e) => {
                            e.preventDefault(); setExpandBookBudz(!expandBookBudz);
                        }
                        }>{expandBookBudz ? '- CLOSE -' : '+ OPEN +'}
                    </button>
                </div>

                {/* Project: Unique Combinations */}
                <div>
                    <div className='border-4 rounded-full overflow-hidden'>
                        <Image 
                                src={uniqueCombinations}
                                alt='Combos Image'
                                layout='responsive'
                        />
                    </div>

                    <h2 className='text-xl m-4'>Unique NFT Combinations</h2>

                    <div>
                        <p className='text-left'>
                            Create NFT rarity tables with this easy to use unique combination app. Specify the names, 
                            amounts, and total asset numbers for each object and download the output to an excel file 
                            along with easy to read pie charts that break down your assets into categories.
                        </p>

                        <span className={`${!expandCombos ? "hidden" : "block m-4"}`}>
                            View the website here: 
                            <a href="https://unique-combinations.netlify.app/" target="_blank" rel="noopener noreferrer" 
                            className='text-stone-700 hover:text-white hover:underline-offset-4'>{' '}Unique Combinations
                            </a>

                            {/* List of technologies used */}
                            <div className='grid grid-cols-3 m-4'>
                                <div className='p-4'>
                                    <Image 
                                        src={reactIcon}
                                        alt='ReactIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={javascriptIcon}
                                        alt='JavascriptIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={htmlIcon}
                                        alt='HtmlIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={cssIcon}
                                        alt='CSSIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={npmIcon}
                                        alt='NpmIcon'
                                        layout='responsive'
                                    />
                                </div>
                            </div>
                        </span>
                    </div>

                    <button className='mt-2 mb-8 text-white font-bold' onClick={
                        (e) => {
                            e.preventDefault(); setExpandCombos(!expandCombos);
                        }
                        }>{expandCombos ? '- CLOSE -' : '+ OPEN +'}
                    </button>
                </div>
                
                {/* Project: Hangman */}
                <div>
                    <div className='border-4 rounded-full overflow-hidden'>
                        <Image 
                                src={hangman}
                                alt='Hangman Image'
                                layout='responsive'
                            />
                    </div>

                    <h2 className='text-xl m-4'>Hangman</h2>
                    <div>
                        <p className='text-left'>
                            A hangman game made using Javascript. See if you can beat the odds and win the game!
                        </p>
                        <span className={`${!expandHangman ? "hidden" : "block m-4"}`}>
                            View the website here: 
                            <a href="https://an-hangman.herokuapp.com/" target="_blank" rel="noopener noreferrer" 
                            className='text-stone-700 hover:text-white hover:underline-offset-4'>{' '}Hangman
                            </a>

                            {/* List of technologies used */}
                            <div className='grid grid-cols-3 m-4'>
                                <div className='p-4'>
                                    <Image 
                                        src={javascriptIcon}
                                        alt='JavascriptIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={htmlIcon}
                                        alt='HtmlIcon'
                                        layout='responsive'
                                    />
                                </div>
                                <div className='p-4'>
                                    <Image 
                                        src={cssIcon}
                                        alt='CSSIcon'
                                        layout='responsive'
                                    />
                                </div>
                            </div>
                        </span>
                    </div>

                    <button className='mt-2 mb-8 text-white font-bold' onClick={
                        (e) => {
                            e.preventDefault(); setExpandHangman(!expandHangman);
                        }
                        }>{expandHangman ? '- CLOSE -' : '+ OPEN +'}
                    </button>
                </div>
                
            </div>
        </div>
    )
}