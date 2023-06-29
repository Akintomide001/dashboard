import Dropdown from "./dropdown";
import { Icon } from '@iconify/react';
import wordpressIcon from '@iconify/icons-dashicons/wordpress';
import adminHome from '@iconify/icons-dashicons/admin-home';
import updateIcon from '@iconify/icons-dashicons/update';
import adminComments from '@iconify/icons-dashicons/admin-comments';
import plusIcon from '@iconify/icons-dashicons/plus';
import avatar from "../pictures/avatar.jpg"
import Image from "next/image";


export default function Mobile() {
    return (
        <>
            <div className="the-mobile">
                <div className="mobile-origin">
                    <div className="mobile">
                        <div>
                            <Dropdown />
                        </div>
                        <div className="icon-mobile">
                            <div className="mobile-lists">
                                <li className="mobile-list-i">
                                    <a href=""><Icon icon={wordpressIcon} className="dropdown" /></a>
                                    <ul className="visit-1">
                                        <li><a href="">About Wordpress</a></li>
                                        <li><a href="">Wordpress.org</a></li>
                                        <li><a href="">Documentation</a></li>
                                        <li><a href="">Support</a></li>
                                        <li><a href="">Feedback</a></li>
                                    </ul>
                                </li>
                                <li className="mobile-list-1i">
                                    <a href=""><Icon icon={adminHome} className="dropdown-1" /></a>
                                    <ul className="visit-1">
                                        <li><a href="">Visit Website</a></li>
                                    </ul>
                                </li>
                                <li className="mobile-list-2">
                                    <a href=""><Icon icon={updateIcon} className="dropdown-1" /></a>
                                </li>
                                <li className="mobile-list-2">
                                    <a href=""><Icon icon={adminComments} className="dropdown-1" /></a>
                                </li>
                                <li className="mobile-list-4i">
                                    <a href=""><Icon icon={plusIcon} className="dropdown-1" /></a>
                                    <ul>
                                        <li><a href="">Post</a></li>
                                        <li><a href="">Media</a></li>
                                        <li><a href="">Page</a></li>
                                        <li><a href="">Landing page</a></li>
                                        <li><a href="">User</a></li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={avatar} alt='/' className="logo-1" />
                    </div>
                </div>
            </div>
        </>
    )
}