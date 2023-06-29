import head from "next/head"
import dashboardIcon from '@iconify/icons-dashicons/dashboard';
import adminPost from '@iconify/icons-dashicons/admin-post';
import adminMedia from '@iconify/icons-dashicons/admin-media';
import adminComments from '@iconify/icons-dashicons/admin-comments';
import { Icon } from '@iconify/react';
import adminAppearance from '@iconify/icons-dashicons/admin-appearance';
import adminPage from '@iconify/icons-dashicons/admin-page';
import adminPlugins from '@iconify/icons-dashicons/admin-plugins';
import adminUsers from '@iconify/icons-dashicons/admin-users';
import adminTools from '@iconify/icons-dashicons/admin-tools';
import adminSettings from '@iconify/icons-dashicons/admin-settings';

export default function Menu() {
    return (
        <>
            <div className="sidebar-1">
                <div className="sidebar-2">
                    <div className="sidebar-2a">
                        <li className="sidebar-menu">
                            <a href="#"><Icon icon={dashboardIcon} className="iconify-1" /></a>
                            <a href="#" className="side-bar"><Icon icon={dashboardIcon} className="iconify" />Dashboard</a>
                        </li>
                        <li className="sidebar-menu">
                            <a href=""><Icon icon={adminPost} className="iconify-1" /></a>
                            <a href="" className="side-bar"><Icon icon={adminPost} className="iconify" />Post</a>
                        </li>
                        <li className="sidebar-menu">
                            <a href=""><Icon icon={adminMedia} className="iconify-1" /></a>
                            <a href="" className="side-bar"><Icon icon={adminMedia} className="iconify" />Media</a>
                        </li>
                        <li className="sidebar-menu">
                            <a href=""><Icon icon={adminPage} className="iconify-1" /></a>
                            <a href=""className="side-bar"><Icon icon={adminPage} className="iconify" />Pages</a>
                        </li>
                        <li className="sidebar-menu">
                            <a href=""><Icon icon={adminComments} className="iconify-1" /></a>
                            <a href="" className="side-bar"><Icon icon={adminComments} className="iconify" />Comments</a>
                        </li>
                    </div>
                    <div className="sidebar-3a">
                        <li className="sidebar-menu">
                            <a href=""><Icon icon={adminAppearance} className="iconify-1" /></a>
                            <a href="" className="side-bar"><Icon icon={adminAppearance} className="iconify" />Appearances</a>
                        </li>
                        <li className="sidebar-menu">
                            <a href=""><Icon icon={adminPlugins} className="iconify-1" /></a>
                            <a href="" className="side-bar"><Icon icon={adminPlugins} className="iconify" />Plugins</a>
                        </li>
                        <li className="sidebar-menu">
                            <a href=""><Icon icon={adminUsers} className="iconify-1" /></a>
                            <a href="" className="side-bar"><Icon icon={adminUsers} className="iconify" />User</a>
                        </li>
                        <li className="sidebar-menu">
                            <a href=""><Icon icon={adminTools} className="iconify-1" /></a>
                            <a href="" className="side-bar"><Icon icon={adminTools} className="iconify" />Tools</a>
                        </li>
                        <li className="sidebar-menu">
                            <a href=""><Icon icon={adminSettings} className="iconify-1" /></a>
                            <a href="" className="side-bar"><Icon icon={adminSettings} className="iconify" />Settings</a>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}