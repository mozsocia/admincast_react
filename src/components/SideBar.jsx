import React from 'react'

function SideBar() {
  return (
    <nav className="page-sidebar" id="sidebar">
    <div id="sidebar-collapse">
        <div className="admin-block d-flex">
            <div>
              
            </div>
            <div className="admin-info">
               
            </div>
        </div>
        <ul className="side-menu metismenu">
            <li>
                <a className="active" href="index.html"><i className="sidebar-item-icon fa fa-th-large"></i>
                    <span className="nav-label">Dashboard</span>
                </a>
            </li>
            <li className="heading">FEATURES</li>
            <li>
                <a href="#"><i className="sidebar-item-icon fa fa-bookmark"></i>
                    <span className="nav-label">Basic UI</span><i className="bx bx-chevron-right arrow"></i></a>
                <ul className="nav-2-level collapse">
                    <li>
                        <a href="colors.html">Colors</a>
                    </li>
                    <li>
                        <a href="typography.html">Typography</a>
                    </li>
                    <li>
                        <a href="panels.html">Panels</a>
                    </li>
                    <li>
                        <a href="buttons.html">Buttons</a>
                    </li>
                    <li>
                        <a href="tabs.html">Tabs</a>
                    </li>
                    <li>
                        <a href="alerts_tooltips.html">Alerts &amp; Tooltips</a>
                    </li>
                    <li>
                        <a href="badges_progress.html">Badges &amp; Progress</a>
                    </li>
                    <li>
                        <a href="lists.html">List</a>
                    </li>
                    <li>
                        <a href="cards.html">Card</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i className="sidebar-item-icon fa fa-sitemap"></i>
                    <span className="nav-label">Menu Levels</span><i className="bx bx-chevron-right arrow"></i></a>
                <ul className="nav-2-level collapse">
                    <li>
                        <a href="#">Level 2</a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="nav-label">Level 2</span><i className="bx bx-chevron-right arrow"></i></a>
                        <ul className="nav-3-level collapse">
                            <li>
                                <a href="#">Level 3</a>
                            </li>
                            <li>
                                <a href="#">Level 3</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default SideBar