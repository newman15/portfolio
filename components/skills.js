import Image from 'next/image';
import checkMark from '../public/icons/check-mark.svg';
import computerProgamming from '../public/computerProgramming.jpg';

export default function Skills(){

    // Tailwind Style for the list items. Declared here for reusability.
    const listItemStyles = 'flex flex-row items-center p-2';

    // Checkmark svg image. Declared here for reusability.
    const checkMarks = (
        <div className='mr-6'>
            <Image
                src={checkMark}
                alt='Check Mark'
                layout='fixed'
                width={24}
                height={24}
                priority
            />
        </div>
        
    )

    return (
        <div className='mx-6'>
            <h5 className='text-center font-Rye'>Skills:</h5>
            <div className='text-center md:flex md:flex-row md:justify-center md:items-center'>
                <ul className='m-12 inline-block text-left'>
                    <li className={listItemStyles}>
                        {checkMarks}
                        <h5 className='font-CrimsonPro'>Front End Development</h5>
                    </li>

                    <li className={listItemStyles}>
                        {checkMarks}
                        <h5 className='font-CrimsonPro'>Back End Development</h5>
                    </li>

                    <li className={listItemStyles}>
                        {checkMarks}
                        <h5 className='font-CrimsonPro'>Modern Web Frameworks</h5>
                    </li>

                    <li className={listItemStyles}>
                        {checkMarks}
                        <h5 className='font-CrimsonPro'>API Development and Implementation</h5>
                    </li>

                    <li className={listItemStyles}>
                        {checkMarks}
                        <h5 className='font-CrimsonPro'>Responsive Web Design</h5>
                    </li>

                    <li className={listItemStyles}>
                        {checkMarks}
                        <h5 className='font-CrimsonPro'>SQL and NoSQL Databases</h5>
                    </li>

                    <li className={listItemStyles}>
                        {checkMarks}
                        <h5 className='font-CrimsonPro'>Source Code Control</h5>
                    </li>

                    <li className={listItemStyles}>
                        {checkMarks}
                        <h5 className='font-CrimsonPro'>Project Management Software</h5>
                    </li>

                    <li className={listItemStyles}>
                        {checkMarks}
                        <h5 className='font-CrimsonPro'>CI/CD Principles and Practices</h5>
                    </li>
                </ul>

                <div className='hidden lg:m-12 lg:block'>
                    <Image
                        className='rounded-xl'
                        src={computerProgamming}
                        alt='Picture of Computer Code'
                        layout='intrinsic'
                        width={450}
                        height={450}
                    />
                </div>
            </div>
            
        </div>
    )
}