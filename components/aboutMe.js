import Image from "next/image";
import profilePic from "../public/hike.png";

export default function AboutMe() {

    return (
        <div className='container mx-auto'>

            <div className='text-center md:pt-4 md:pb-10'>
                <p className='font-Rowdies text-white'>About: </p>
                <h1 className='text-slate-900 text-2xl font-Rowdies'>{' '}Aaron Newman</h1>
            </div>
            
            <div className='md:grid md:grid-cols-2'>
                <div className='text-center'>
                    <div className='pt-4'>
                        <Image 
                            className='rounded-full'
                            src={profilePic}
                            alt="Profile Pic"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                
                <div>
                    <p className='text-center pt-4 font-Montserrat'>
                        Thanks for stopping by!
                    </p>
                    <p className='text-left m-4 font-Montserrat'>
                        I am a software engineer and I.T. professional located in the wonderful Pacific Northwest.
                        I have a Bachelors degree in Computer Science from Cal State Monterey Bay, and have worked 
                        in the Information Technology industry for over 5 years. I'm passionate about turning 
                        ordinary ideas into masterful products by creating engaging user experiences with clean 
                        and reusable code. 
                    </p>
                </div>
            </div>

            <div className='container text-center mt-16'>
                <h1 className='font-Rowdies text-2xl'>Skills</h1>
                <div className='m-4 md:grid md:grid-cols-2 md:gap-8 font-Montserrat'>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Front End Development</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Backend Development</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Frameworks</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>API</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Responsive Web Design</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Databases</p>
                </div>
            </div>

            <div className='container text-center mt-16'>
                <h1 className='font-Rowdies text-2xl'>Tools</h1>
                <div className='m-4 md:grid md:grid-cols-3 md:gap-4 font-Montserrat'>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Javascript</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>ReactJS</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>NodeJS</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>NextJS</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>HTML</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>CSS</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Tailwind CSS</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>MongoDB</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>MySQL</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Git</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Java</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Spring</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>Python</p>
                    <p className='border-2 rounded-full p-4 mb-4 md:mb-0'>C++</p>
                </div>
            </div>

            {/* <div className='flex'>
                <p className='container border-t-4 m-4 p-4 text-center font-Rowdies text-2xl'>Hobbies</p>
                <div className='container  border-t-4 m-4'>
                    <ul className='text-left p-4 font-Montserrat'>
                        <li>Reading</li>
                        <li>Hiking</li>
                        <li>Camping</li>
                        <li>Guitar</li>
                        <li>Sleeping</li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}