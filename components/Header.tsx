import Image from 'next/image'
import Link from 'next/link'
function Header() {
    return (
        <header className='flex justify-between p-4 bg-white z-40 sticky shadow-md top-0'>
            {/* left div */}
            <div className='flex space-x-2'>
                {/* by default flex row */}
                <Image src="https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png"
                    alt="VisionaryAI"
                    width={37}
                    height={20}
                />
                <div>
                    <h1 className='font-bold'>VisionaryAI: <span className="text-violet-500">AI</span> Image generator</h1>
                    <h2 className='text-xs'>
                        Powered  by DALL.E 2 & Chat GPT
                    </h2>
                </div>
            </div>
            {/* right div */}
            <div className='flex divide-x text-xs md:text-base items-center text-gray-500'>
                <Link
                    href="https://github.com/Srijan-D"
                    className='px-2 font-light'
                >
                    Contact Me!
                </Link>
                <Link
                    href="https://github.com/Srijan-D/dall-e2"
                    className='px-2 font-light'
                >
                    Github repository
                </Link>
            </div>


        </header>
    )
}

export default Header