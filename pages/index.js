import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from './sidebar'
import Header from './header'
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-dashicons/arrow-down';
import jetpack from '../pictures/jetpack.svg'
import element from '../pictures/icon-logo.svg'
import header from '../pictures/header.svg'
import { FaTimes } from 'react-icons/fa';
import externalIcon from '@iconify/icons-dashicons/external';
import smileyIcon from '@iconify/icons-dashicons/smiley';
import calendarAlt from '@iconify/icons-dashicons/calendar-alt';
import sosIcon from '@iconify/icons-dashicons/sos';
import dismissIcon from '@iconify/icons-dashicons/dismiss';
import elementorIcon from '@iconify/icons-fa6-brands/elementor';
import arrowUpAlt2 from '@iconify/icons-dashicons/arrow-up-alt2';
import arrowDownAlt2 from '@iconify/icons-dashicons/arrow-down-alt2';
import arrowUp from '@iconify/icons-dashicons/arrow-up'
import plusIcon from '@iconify/icons-dashicons/plus';
import editIcon from '@iconify/icons-dashicons/edit';

export default function Home() {
  return (
    <>
      <Header />
      <div className='main'>
        <div>
          <Sidebar />
        </div>
        <div className='main-body'>
          <div className='main-1'>
            <button className='main-button-1'>Screen option   <Icon icon={arrowDown} className='menu-icon' /></button>
            <button className='main-button-2'>Help<Icon icon={arrowDown} className='menu-icon' /></button>
          </div>
          <div className='main-2'>
            <div className='space'>
              <div className='jet-logo'>
                <Image src={jetpack} alt='/' className="jet" />
              </div>
              <div className='menu-2a'>
                <div className='menu-2-head'>Did you know you’re running an outdated version of Jetpack?
                </div>
                <div className='menu-2-p'>Update Jetpack now for better performance and access to the latest and greatest features.</div>
              </div>
            </div>
            {/*   */}
            <div className='menu-2-b'>
              <div className='bot'><button className='menu-2btn'>Update Now</button></div>
              <div><FaTimes className='menu2-times' /></div>

            </div>
          </div>
          {/* menu-3 */}
          <div className='menu-3'>
            <h1>Dashboard</h1>
            <div className='menu-3-1'>
              <p>
                Please synchronize comment data for the best performance and fastest experience
                <a href=''>Synchronize Commenters Data</a>
              </p>
            </div>
          </div>
          {/* menu-4 */}
          <div className='menu-4'>
            <div className='elementor'>
              <Image src={element} alt='/' className="element" />
            </div>
            <div className='menu-4a'>
              <p>We hope you're enjoying Essential Addons for Elementor! Could you please do us a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?</p>
              <div className='menu-4-link'>
                <li>
                  <a href=''><span><Icon icon={externalIcon} className='icon-4' /></span>Ok, you deserve it!</a>
                </li>
                <li>
                  <a href=''><span><Icon icon={smileyIcon} className='icon-4' /></span>I already did</a>
                </li>
                <li>
                  <a href=''><span><Icon icon={calendarAlt} className='icon-4' /></span>I need help</a>
                </li>
                <li>
                  <a href=''><span><Icon icon={sosIcon} className='icon-4' /></span>Maybe later</a>
                </li>
                <li>
                  <a href=''><span><Icon icon={dismissIcon} className='icon-4' /></span>Never show again</a>
                </li>

              </div>
            </div>
          </div>
          {/* menu-4 */}
          {/* menu-5 */}
          <div className='menu-5'>
            <div className='aside-5'>
              <Icon icon={elementorIcon} className='aside-icon' />
            </div>
            <div className='menu-5a'>
              <h3>Love using Elementor?</h3>
              <p>Become a super contributor by opting in to share non-sensitive plugin data and to receive periodic email updates from us.
                <a href=''> Learn more.</a>
              </p>
              <div className='menu-5-span'>
                <a href='' className='m-span-1'><span >Sure! i'd love to help</span></a>
                <a href=''><span className='m-span-2'>No thanks</span></a>
              </div>
            </div>
            <div className='times-5'>
              <FaTimes className='span-times' />
            </div>
          </div>
          {/* menu-5 */}
          {/* menu-6 */}
          <div className='menu-6'>
            <div className='menu-6-image'>
              <Image src={header} alt='/' className="menu-img" />
            </div>
            <div className='menu-6a'>
              <p>Hello! Seems like you have used Elementor Header & Footer Builder to build this website — Thanks a ton!</p>
              <p className='p-menu'>Could you please do us a BIG favor and give it a 5-star rating on WordPress? This would boost our motivation and help other users make a comfortable decision while choosing the Elementor Header & Footer Builder.</p>
              <div className='menu-6ai'>
                <a href='' className='m-span-6'><span >Sure! i'd love to help</span></a>
                <span className='span-6'><Icon icon={calendarAlt} className='icon-5' /><a href=''>Nope, maybe later</a></span>
                <span className='span-6'><Icon icon={smileyIcon} className='icon-5' /><a href=''>I already did</a></span>
              </div>
            </div>
            <div className='menu-6-close'>
              <Icon icon={dismissIcon} className='icon-6' />
            </div>
          </div>
          {/* menu-6 */}
          {/* menu-7 */}
          <div className='menu-7'>
            <div className='menu-7a'>
              <div className='menu-7ai'>
                <div className='menu-7a0'>
                  <h4>Elementor Overview</h4>
                  <div className='menu-7-icon'>
                    <Icon icon={arrowUpAlt2} />
                    <Icon icon={arrowDownAlt2} />
                    <Icon icon={arrowUp} />
                  </div>
                </div>
              </div>
              {/* part b */}
              <div className='menu-7aii'>
                <div className='menu-7aii0'>
                  <div className='menu-7aiib'>
                    <Icon icon={elementorIcon} className='menu7-icon' />
                    <div className='menu-7-p'>
                      <p>Elementor v3.6.5</p>
                      <p>Elementor Pro v3.4.2</p>
                    </div>
                  </div>
                  <div className='span-7'>
                    <a href=''><span><Icon icon={plusIcon} className='menu-plus' /></span>Create New Page</a>
                  </div>
                </div>
              </div>
              {/* part b */}
              {/* part c */}
              <div className='menu-7aiii'>
                <div className='menu-view'>
                  <h4>Recently view</h4>
                </div>
              </div>
              {/* part c */}
              {/* part d */}
              <div className='menu-7ad'>
                <div className='menu-7-list'>
                  <li>
                    <a href=''>Bayo form  <Icon icon={editIcon} className='list7-icon' /></a><span className='list7-span'>Jun 1st, 8:51pm</span>
                  </li>
                  <li>
                    <a href=''>Register  <Icon icon={editIcon} className='list7-icon' /></a><span className='list7-span'>Feb 1st, 8:51pm</span>
                  </li>
                  <li>
                    <a href=''>Login  <Icon icon={editIcon} className='list7-icon' /></a><span className='list7-span'>Feb 1st, 8:51pm</span>
                  </li>
                </div>
              </div>
              {/* part d */}
              {/* part e */}
              <div className='menu-7ae'>
                <div className='menu-7aei'>
                  <h4>News & Updates</h4>
                </div>
              </div>
              {/* part e */}
              <div className='menu-7af'>
                <div className='menu-7f-list'>
                  <li>
                    <a href=''><span className='new'>New </span>Introducing Elementor AI for Image Creation</a>
                    <p className='p-list-7'>
                      Elementor 3.14 introduces the next phase of Elementor AI, which includes image generation. With Elementor AI you can describe the images you want to create, enhance existing images, customize and edit to adjust their size, and more.
                    </p>
                  </li>
                  <li>
                    <a href=''><span className='new'>New </span>Introducing Elementor AI – Revolutionize the Way You Create Websites</a>
                    <p className='p-list-7'>
                      Elementor includes a new natively integrated AI product, available as a free trial starting in Elementor 3.13. Benefit from a wide array of use cases available from directly within the Editor to transform the way you build websites.
                    </p>
                  </li>
                </div>
              </div>
            </div>
            <div className='menu-7b'>
              <div className='menu-7ai'>
                <div className='menu-7a0'>
                  <h4>Quick Draft</h4>
                  <div className='menu-7-icon'>
                    <Icon icon={arrowUpAlt2} />
                    <Icon icon={arrowDownAlt2} />
                    <Icon icon={arrowUp} />
                  </div>
                </div>
              </div>
              <div className='menu-7bi'>
                <div className='title'>
                  <p>Title</p>
                  <input></input>
                </div>
                <div className='title-1'>
                  <p> Content</p>
                  <textarea type='text' placeholder="What's on your mind?"></textarea>
                  <button type='submit'>Save Draft</button>
                </div>
              </div>
            </div>
          </div>
          {/* menu-7 */}
        </div>

      </div>
    </>
  )
}
