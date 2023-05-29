import Image from 'next/image'
import { PrimaryButton } from '../components/button/index'

export default function Home() {
  return (
    <section className='bg-primary'>
      {/* navbar */}
      <div className="navbar bg-primary container text-white py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
              <li><a>HOME</a></li>
              <li><a>Services</a></li>
              <li><a>PORTFOLIO</a></li>
              <li><a>RESUME</a></li>
              <li><a>CONTACT</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <Image
              src="/images/logo.png"
              width={50}
              height={50}
              alt="Picture of the author"
              className='rounded-full'
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm">
            <li><a className=''>HOME</a></li>
            <li><a>SERVICES</a></li>
            <li><a>PORTFOLIO</a></li>
            <li><a>RESUME</a></li>
            <li><a>CONTACT</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <PrimaryButton name='DOWNLOAD CV'></PrimaryButton>
        </div>
      </div>

      {/* banner area */}
      <section className='my-32 container'>
        <div className='grid grid-cols-1 md:grid-cols-2 text-white'>
          {/* left side content */}
          <div className='md:col-span-1'>
            <h2><span className='text-3xl font-semibold'>Hello, </span> <span className='text-secondary text-3xl font-semibold'>I'm</span></h2>
            <h1 className='text-6xl font-bold my-2' >Bokhtiar Toshar</h1>
            <h2 className='text-3xl font-semibold'>Software engineer</h2>

            {/* about me */}
            <p className='my-12 text-gray-400 '>Hi, I am Bokhtiar Toshar a passionate Software Engineer: Laravel, Nodejs, Reactjs, Vuejs, nextjs, Database : MongoDB, MySql. Always I want to learn something</p>
            {/* find on me */}
            <div className='my-12'>
              <h2 className='uppercase mb-2'>Find ON Me</h2>
              <div className='flex items-center gap-3'>
                {/* facebook */}
                <a className='bg-white rounded' href="">
                  <Image
                    src="/images/icon/fb.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className='rounded-full'
                  />
                </a>

                {/* facebook */}
                <a className='bg-white rounded' href="">
                  <Image
                    src="/images/icon/insta.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className='rounded-full'
                  />
                </a>

                {/* facebook */}
                <a className='bg-white rounded' href="">
                  <Image
                    src="/images/icon/twitter.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className='rounded-full'
                  />
                </a>

                {/* facebook */}
                <a className='bg-white rounded' href="">
                  <Image
                    src="/images/icon/github.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className='rounded-full'
                  />
                </a>

                {/* facebook */}
                <a className='bg-white rounded' href="">
                  <Image
                    src="/images/icon/linkdin.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className='rounded-full'
                  />
                </a>

              </div>
            </div>
          </div>
          {/* right side content */}
          <div className='md:col-span-1'>
            <Image
              src="/images/logo.png"
              width={450}
              height={250}
              alt="Picture of the author"
              className='rounded-full mx-auto'
            />
          </div>
        </div>
      </section>
    </section>
  )
}
