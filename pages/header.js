import { BsWordpress } from "react-icons/bs"
import { IoHome } from "react-icons/io5"
import { Icon } from '@iconify/react';
import updateIcon from '@iconify/icons-dashicons/update';
import messageIcon from '@iconify/icons-fa6-solid/message';
import { FaPlus } from "react-icons/fa"
import avatar from "../pictures/avatar.jpg"
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="main-header">
                <div className="sub-header">
                    <li className="header-list" id="sp1">
                        <a href=""><BsWordpress id="special" /></a>
                        <ul className="visit-1">
                            <li><a href="">About Wordpress</a></li>
                            <li><a href="">Wordpress.org</a></li>
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Feedback</a></li>
                        </ul>
                    </li>
                    <li className="header-list-1">
                        <a href=""><IoHome className="h-icon" /><span className="header-span">Tommy Blog</span></a>
                        <ul >
                            <li><a href="">Visit site</a></li>
                        </ul>
                    </li>
                    <li className="header-list-2">
                        <a href=""><Icon icon={updateIcon} className="s-icon" id="special-1" /><span className="header-span" id="special-1i">14</span></a>
                    </li>
                    <li className="header-list-3">
                        <a href="" ><Icon icon={messageIcon} className="s-icon" id="special-2" /><span className="header-span">0</span></a>
                    </li>
                    <li className="header-list-4">
                        <a href=""><FaPlus className="h-icon" /><span className="header-span">New</span></a>
                        <ul>
                            <li><a href="">Post</a></li>
                            <li><a href="">Media</a></li>
                            <li><a href="">Page</a></li>
                            <li><a href="">Landing page</a></li>
                            <li><a href="">User</a></li>
                        </ul>
                    </li>
                </div>
                <div className="sub-header-2">
                    <li className="header-listB">
                        <span className="span-2">
                            <Icon icon={messageIcon} id="span-ms" />
                        </span>
                    </li>
                    <li className="header-listBi">
                        <a href="" className="span-3">Howdy, <span>Ubiquitous Operations</span>
                            <Image src={avatar} alt='/' className="logo" />
                        </a>
                    </li>
                </div>
            </div>
        </>
    )
}