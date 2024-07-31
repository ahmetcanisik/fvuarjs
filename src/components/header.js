import { stored, Icon } from './lib/utilities';
import { content } from './lib/data';
import { useRef, useState, useEffect } from "react";
import { useUpdatePreferences, usePreferences } from "./hooks";
import { Tooltip } from "react-tooltip";

export default function Header() {
    const [showSideBar, setShowSideBar] = useState(false);
    const [innerWidth, setInnerWeight] = useState(window.innerWidth);
    const sidebar = useRef();
    useEffect(() => {
        const handleResize = () => {
            setInnerWeight(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const openDialog = (e) => {
        if (sidebar.current.classList.contains("show")) {
            sidebar.current.classList.remove('show');
            document.body.classList.remove('overflow-hidden');
            setShowSideBar(false)
        } else {
            sidebar.current.classList.add('show');
            document.body.classList.add('overflow-hidden');
            setShowSideBar(true)
        }
    }
    return (
        <>
            <SideBar referance={sidebar} element={sidebar} className={showSideBar ? "show" : ''} showMobileNavbar={innerWidth <= 628 && true}/>
            <header className="header outbox">
                <div className="bar">
                    <Logo/>
                    <div className="menus">
                        {innerWidth >= 629 && <NavBar/>}
                        <button className="openLangDialog btn" data-tooltip-id="hamburgerTooltip" onClick={openDialog}><Icon
                            icon="hamburger"/> {/*innerWidth >= 629 && stored.cl.header.preferences*/}
                        </button>
                    </div>
                    <Tooltip id="hamburgerTooltip" content={stored.cl.header.preferences} />
                </div>
            </header>
        </>
    );
}

function Logo() {
    return (
        <hgroup>
            <a href='/' className='logo-text'>
                <span translate="no" className='logo cursor-pointer'>&gt; fvuar<span translate="no" className='js-text'>JS</span></span>
                <span className="mini-logo cursor-pointer">{stored.cl.header.slogan}</span>
            </a>
            <select name="version_control" className="version" id="">
                <option value="0.0.4">v0.0.4</option>
            </select>
        </hgroup>
    );
}

function NavBar({ className }) {
    const path = window.location;
    return (
        <nav className={className}>
            <ul className="navbar">
                { className && <h3 className='text-left'><Icon icon="document" /> {stored.cl.header.menu.title}</h3> }
                <li><a href='/testing' className={`nav-button btn${path.pathname === "/testing" ? '-active' : ''}`}>{stored.cl.header.menu.button.test}</a></li>
                <li><a href='/changelog' className={`nav-button btn${path.pathname === "/changelog" ? '-active' : ''}`}>{stored.cl.header.menu.button.notes}</a></li>
            </ul>
        </nav>
    );
}

function SideBar({ referance, element, className, showMobileNavbar = false }) {
    const closeSideBar = () => {
        element.current.classList.remove('show')
        document.body.classList.remove('overflow-hidden');
    }
    return (
        <>
            <aside ref={referance} className={`sidebar ${className}`}>
                <div className="block-dom" onClick={closeSideBar}></div>
                <div className="sidebar-content pattern-grid-md">
                    <button className="btn close-sidebar" data-tooltip-id="closeSideBarTooltip" onClick={closeSideBar}><Icon icon="close"/></button>
                    <Tooltip id="closeSideBarTooltip" content={stored.cl.header.select_language.close} />
                    <h2 className="text-center"><Icon icon="preferences"/> {stored.cl.header.preferences}</h2>
                    <LangPanel/>
                    <ThemePanel/>
                    {showMobileNavbar && <NavBar className="mobile-bar"/>}
                </div>
            </aside>
        </>
    )
}

function LangPanel() {
    const updatePreferences = useUpdatePreferences();
    const usePref = usePreferences();
    const [language, setLanguage] = useState(usePref.preferences.lang);
    const handleChange = (e) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
        updatePreferences({lang: selectedLang});
        if (language !== selectedLang) {
            window.location.reload();
        }
    }

    return (
        <div className="row">
            <h3 className="text-left"><Icon icon="lang"/> {stored.cl.header.select_language.title}</h3>
            <select name="language" className="inp" id="language" multiple onChange={(e) => handleChange(e)}>
                {content.langs.map(lang => (
                    <option key={lang.short_name} value={lang.short_name} selected={language === lang.short_name}>
                        <span className="icon">{lang.icon}</span> {lang.long_name}
                    </option>
                ))}
            </select>
        </div>
    );
}

function ThemePanel() {
    const updatePreferences = useUpdatePreferences();
    const usePref = usePreferences();
    const handleChange = (e) => {
        updatePreferences({
            theme: e.target.value
        });
    }

    return (
        <div className="row">
            <h3 className="text-left"><Icon icon="theme"/> {stored.cl.header.select_theme.title}</h3>
            <select name="theme" className="inp" multiple id="theme" onChange={(e) => handleChange(e)}>
                {stored.cl.header.select_theme.themes.map(theme =>
                    (
                        <option key={theme.name} value={theme.name} selected={usePref.preferences.theme === theme.name}>
                            <span className="icon">{theme.icon}</span> {theme.value}
                        </option>
                    )
                )}
            </select>
        </div>
    );
}