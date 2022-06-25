import bookBudz from '../public/projects/BookBudz.png';
import hangman from '../public/projects/hangman.png';
import membershipDirect from '../public/projects/MembershipDirect.png';
import movieSearch from '../public/projects/MovieSearch.png';
import uniqueCombinations from '../public/projects/uniqueCombinations.png';

import Image from "next/image";
import htmlIcon from '../public/icons/html.svg';
import cssIcon from '../public/icons/css.svg';
import githubIcon from '../public/icons/github2.svg';
import javascriptIcon from '../public/icons/javascript.svg';
import mongoIcon from '../public/icons/mongoDB.svg';
import nextAuthIcon from '../public/icons/next-auth.png';
import nextIcon from '../public/icons/nextjs.svg';
import reactIcon from '../public/icons/react.svg';
import vercelIcon from '../public/icons/vercel.svg';
import tailwindIcon from '../public/icons/tailwind.svg'
import aws from '../public/icons/aws.svg';
import typescript from '../public/icons/typescript.svg';
import mysql from '../public/icons/mysql-official.svg';
import ajax from '../public/icons/ajax.png';
import netlify from '../public/icons/netlify.svg';
import plotly from '../public/icons/plotly.svg';
import heroku from '../public/icons/heroku.svg';

export default function Projects() {

    return (
        <div className='mx-6'>
            <h5 className='text-center mb-12 font-Rye'>Projects:</h5>
            <div>
                {/* Membership Direct */}
                <div className='mb-20 lg:grid lg:grid-cols-2 lg:mr-12 lg:items-top'>
                    <div className='m-6 text-center lg:text-right'>
                        <Image
                            className='rounded-xl'
                            src={membershipDirect}
                            alt='MembershipDirect Image'
                            layout='intrinsic'
                            width={450}
                            height={450}
                        />
                    </div>
                    
                    <div className='mx-4'>
                        <a href="https://membershipdirect.vercel.app/" target="_blank" rel='noopener noreferrer'>
                            <h4 className='text-center text-white underline font-BebasNeue'>Membership Direct:</h4>
                        </a>
                        
                        <h6 className='text-left font-Vidaloka'>
                            Contracted role for a startup company specializing in car insurance deductable services. 
                            A responsive web application that allows users to enroll in various membership services, 
                            submit/view claims, pay monthly membership dues, and manage personal information via an 
                            intuitive online user portal.
                        </h6>
                        <div className='flex flex-row flex-wrap'>
                            <div className='m-2'><Image src={nextIcon} alt='nextIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={typescript} alt='typescript' layout='fixed' width={80} height={80} className='rounded-xl'/></div>
                            <div className='m-2'><Image src={reactIcon} alt='reactIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={mysql} alt='mysql' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={tailwindIcon} alt='tailwindIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={nextAuthIcon} alt='nextAuthIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={vercelIcon} alt='vercelIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={aws} alt='aws' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'>
                                <a href="https://github.com/newman15/membership-direct-v2" target="_blank" rel='noopener noreferrer'>
                                    <Image src={githubIcon} alt='githubIcon' layout='fixed' width={80} height={80}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book Budz */}
                <div className='mb-20 lg:grid lg:grid-cols-2 lg:mr-12 lg:items-top'>
                    <div className='m-6 text-center lg:text-right'>
                        <Image
                            className='rounded-xl'
                            src={bookBudz}
                            alt='BookBudz Image'
                            layout='intrinsic'
                            width={450}
                            height={450}
                        />
                    </div>
                    
                    <div className='mx-4'>
                        <a href="https://book-budz.vercel.app/" target="_blank" rel='noopener noreferrer'>
                            <h4 className='text-center text-white underline font-BebasNeue'>Book Budz:</h4>
                        </a>
                        
                        <h6 className='text-left font-Vidaloka'>
                            Browse and search for thousands of books on the Google Book Store. Search by author, 
                            title, and ISBN. Secure sign in with your Google account using OAuth. Interact with 
                            the Google Books API to add your favorite books to a personal book board. Create 
                            public book boards to share books with other people.
                        </h6>
                        <div className='flex flex-row flex-wrap'>
                            <div className='m-2'><Image src={nextIcon} alt='nextIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={javascriptIcon} alt='javascriptIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={reactIcon} alt='reactIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={mongoIcon} alt='mongoIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={tailwindIcon} alt='tailwindIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={nextAuthIcon} alt='nextAuthIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={vercelIcon} alt='vercelIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'>
                                <a href="https://github.com/newman15/book-budz" target="_blank" rel='noopener noreferrer'>
                                    <Image src={githubIcon} alt='githubIcon' layout='fixed' width={80} height={80}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Movie Search */}
                <div className='mb-20 lg:grid lg:grid-cols-2 lg:mr-12 lg:items-top'>
                    <div className='m-6 text-center lg:text-right'>
                        <Image
                            className='rounded-xl'
                            src={movieSearch}
                            alt='MembershipDirect Image'
                            layout='intrinsic'
                            width={450}
                            height={450}
                        />
                    </div>
                    
                    <div className='mx-4'>
                        <a href="https://aane20-hw3.herokuapp.com/index.html" target="_blank" rel='noopener noreferrer'>
                            <h4 className='text-center text-white underline font-BebasNeue'>Movie DB Search:</h4>
                        </a>
                        
                        <h6 className='text-left font-Vidaloka'>
                            Search for movies by title and view the film summary, release date, cast, and trailer. 
                            Utilizes the Movie DB API to search and retrieve the first title match.
                        </h6>
                        <div className='flex flex-row flex-wrap'>
                            <div className='m-2'><Image src={javascriptIcon} alt='javascriptIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={htmlIcon} alt='htmlIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={cssIcon} alt='cssIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={ajax} alt='ajax' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'>
                                <a href="https://github.com/newman15/Movie_Search" target="_blank" rel='noopener noreferrer'>
                                    <Image src={githubIcon} alt='githubIcon' layout='fixed' width={80} height={80}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Unique Combinations */}
                <div className='mb-20 lg:grid lg:grid-cols-2 lg:mr-12 lg:items-top'>
                    <div className='m-6 text-center lg:text-right'>
                        <Image
                            className='rounded-xl'
                            src={uniqueCombinations}
                            alt='BookBudz Image'
                            layout='intrinsic'
                            width={450}
                            height={450}
                        />
                    </div>
                    
                    <div className='mx-4'>
                        <a href="https://unique-combinations.netlify.app/" target="_blank" rel='noopener noreferrer'>
                            <h4 className='text-center text-white underline font-BebasNeue'>Unique NFT Combinations:</h4>
                        </a>
                        
                        <h6 className='text-left font-Vidaloka'>
                            Create NFT rarity tables with this easy to use combination web app. Specify the names, amounts, 
                            and total asset numbers for each object and download the output to an excel file, along with 
                            easy to read pie charts that break down your assets into categories based on percentage of occurence.
                        </h6>
                        <div className='flex flex-row flex-wrap'>
                            <div className='m-2'><Image src={reactIcon} alt='nextIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={javascriptIcon} alt='javascriptIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={netlify} alt='reactIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={plotly} alt='mongoIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={cssIcon} alt='tailwindIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'>
                                <a href="https://github.com/newman15/combinations-react" target="_blank" rel='noopener noreferrer'>
                                    <Image src={githubIcon} alt='githubIcon' layout='fixed' width={80} height={80}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hangman */}
                <div className='mb-20 lg:grid lg:grid-cols-2 lg:mr-12 lg:items-top'>
                    <div className='m-6 text-center lg:text-right'>
                        <Image
                            className='rounded-xl'
                            src={hangman}
                            alt='BookBudz Image'
                            layout='intrinsic'
                            width={450}
                            height={450}
                        />
                    </div>
                    
                    <div className='mx-4'>
                        <a href="https://an-hangman.herokuapp.com/" target="_blank" rel='noopener noreferrer'>
                            <h4 className='text-center text-white underline font-BebasNeue'>Hangman Javascript:</h4>
                        </a>
                        
                        <h6 className='text-left font-Vidaloka'>
                            A hangman game made using Javascript. See if you can beat the odds and win the game!
                        </h6>
                        <div className='flex flex-row flex-wrap'>
                            <div className='m-2'><Image src={javascriptIcon} alt='javascriptIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={htmlIcon} alt='reactIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={cssIcon} alt='tailwindIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={heroku} alt='tailwindIcon' layout='fixed' width={80} height={80}/></div>
                            <div className='m-2'><Image src={githubIcon} alt='githubIcon' layout='fixed' width={80} height={80}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}