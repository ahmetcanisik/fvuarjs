import { stored, Icon } from './lib/utilities';
import { content } from './lib/data';
import { useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { useUpdatePreferences, usePreferences } from "./hooks";

export default function Header() {
    return (
        <header className="header outbox">
            <div className="bar">
                <Logo />
                <NavBar />
                <Dialog />
            </div>
        </header>
    );
}

function Logo() {
    const path = useLocation();
    return (
        <hgroup>
            <a href='/' target={path.pathname === '/' && '_blank'} className='logos'>
                <img src="/logo192.png" width="64" height="64" alt="fvuarJS" />
            </a>
            <a href='/' target={path.pathname === '/' && '_blank'} className='logo-text'>
                <span className='logo'>./fvuar<span className='js-text'>JS</span></span>
                <span className="mini-logo">{stored.cl.header.slogan}</span>
            </a>
        </hgroup>
    );
}

function NavBar({ className }) {
    const path = useLocation();
    return (
        <nav className={className}>
            <ul className="navbar">
                { className && <h3 className='text-left'><Icon icon="document" /> {stored.cl.header.menu.title}</h3> }
                <li><a href='/test' className={`btn${path.pathname === "/test" ? '-active' : ''}`}>{stored.cl.header.menu.button.test}</a></li>
                <li><a href='/update-notes' className={`btn${path.pathname === "/update-notes" ? '-active' : ''}`}>{stored.cl.header.menu.button.notes}</a></li>
            </ul>
        </nav>
    );
}

function Dialog() {
    const [innerWidth, setInnerWeight] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setInnerWeight(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const dialog = useRef();
    const openDialog = () => {
        dialog.current.showModal();
    }
    const closeDialog = () => {
        dialog.current.close();
    }

    return (
        <>
            <button className="openLangDialog btn" title={stored.cl.header.preferences} onClick={openDialog}><Icon icon="preferences"/> {innerWidth >= 380 && stored.cl.header.preferences} </button>
            <dialog ref={dialog}>
                <h2 className="text-center"><Icon icon="preferences"/> {stored.cl.header.preferences}</h2>
                <LangPanel/>
                <ThemePanel/>
                { innerWidth <= 628 && <NavBar className="mobile-bar" /> }
                <button type="button" id="closeLangDialog" className="btn close" onClick={closeDialog} autoFocus>{stored.cl.header.select_language.close}</button>
            </dialog>
        </>
    );
}

function LangPanel() {
    const updatePreferences = useUpdatePreferences();
    const { preferences } = usePreferences(); // get the current preferences from context
    const initialLang = content.langs.find(lang => lang.short_name === preferences.lang); // use preferences.lang instead of stored.lang
    const handleChange = (e) => {
        updatePreferences({ lang: e.target.value });
        window.location.reload();
    }

    return (
        <div className="row">
            <h3 className="text-left"><Icon icon="lang"/> {stored.cl.header.select_language.title}</h3>
            <select name="language" className="inp" id="language" onChange={(e) => handleChange(e)}>
                {initialLang && (
                    <option value={initialLang.short_name}>
                        <span className="icon">{initialLang.icon}</span> <span>{stored.cl.langs[initialLang.short_name]}</span>
                    </option>
                )}
                {content.langs.map(lang => (
                    lang.short_name !== preferences.lang && ( // use preferences.lang instead of stored.lang
                        <option key={lang.short_name} value={lang.short_name}>
                            <span className="icon">{lang.icon}</span> {stored.cl.langs[lang.short_name]}
                        </option>
                    )
                ))}
            </select>
        </div>
    );
}

function ThemePanel() {
    const updatePreferences = useUpdatePreferences();
    const { preferences } = usePreferences(); // get the current preferences from context
    const initialTheme = stored.cl.header.select_theme.themes.find(theme => theme.name === preferences.theme); // use preferences.theme instead of stored.theme
    const handleChange = (e) => {
        updatePreferences({
            theme: e.target.value
        });
    }

    return (
        <div className="row">
            <h3 className="text-left"><Icon icon="theme"/> {stored.cl.header.select_theme.title}</h3>
            <select name="theme" className="inp" id="theme" onChange={(e) => handleChange(e)}>
                {initialTheme && (
                    <option value={initialTheme.name}>
                        <span className="icon">{initialTheme.icon}</span> {initialTheme.value}
                    </option>
                )}
                {stored.cl.header.select_theme.themes.map(theme => (
                    theme.name !== preferences.theme && ( // use preferences.theme instead of stored.theme
                        <option key={theme.name} value={theme.name}>
                            <span className="icon">{theme.icon}</span> {theme.value}
                        </option>
                    )
                ))}
            </select>
        </div>
    );
}