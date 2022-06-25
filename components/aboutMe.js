import Image from "next/image";
import profilePic from "../public/personalPic.jpg";

export default function AboutMe() {

    return (
        <div className='mx-6'>
            <div className='text-center m-6'>
                <h5 className='font-Rye'>About:</h5>
                <h2 className='font-Vidaloka'>Aaron Newman</h2>
            </div>

            <div className='lg:grid lg:grid-cols-2 lg:items-center lg:mt-12'>
                <div className='text-center md:min-w-[400px] lg:text-right lg:mr-16'>
                    <Image
                        className='rounded-full'
                        src={profilePic}
                        alt="Profile Pic"
                        width={400}
                        height={400}
                    />
                </div>
                
                <div className='max-w-[700px] mx-auto lg:ml-0'>
                    <h6 className='mt-12 lg:mt-0 text-center font-Vidaloka'>Thanks for stopping by! <br/></h6>
                    <h6 className='m-6 inline-block text-left font-Vidaloka'>
                        I am software engineer and I.T. professional located in the state of Washington. 
                        I have a Bachelors Degree in Computer Science from Cal State Monterey Bay, and have 
                        over 5 years of experience in Information Technology, Full Stack Development, and 
                        Software Engineering. I am open to new job opportunities in Full Stack, Front End, or 
                        Backend Development roles. Keep reading for a detailed list of my skills, experience, 
                        and projects. Make sure to connect with me 
                        on <a className='hover:text-white underline' href='https://www.linkedin.com/in/aaron-newman-897141133/' target='_blank'  rel='noopener noreferrer'>LinkedIn!</a>
                    </h6>
                </div>
            </div>
        </div>
    )
}