import { cl, Icon, updatePreferences, stored } from './lib/utilities';
import { content } from './lib/data';
import { useRef } from "react";

export default function Header() {
    return (
        <header className="header outbox">
            <div className="bar">
                <Logo />
                <Dialog />
            </div>
        </header>
    );
}

function Logo() {
    return (
        <hgroup>
            <span className="logo">fvuarJS</span>
            <span className="mini-logo">{cl.header.select_language.slogan}</span>
        </hgroup>
    );
}

function Dialog() {
    const dialog = useRef();
    const openDialog = () => {
        dialog.current.showModal();
    }
    const closeDialog = () => {
        dialog.current.close();
    }

    return (
        <>
            <button className="openLangDialog btn" onClick={openDialog}><Icon icon="preferences"/> {cl.header.preferences} </button>
            <dialog ref={dialog}>
                <h2 className="text-center"><Icon icon="preferences"/> {cl.header.preferences}</h2>
                <LangPanel/>
                <ThemePanel/>
                <button type="button" id="closeLangDialog" className="btn close" onClick={closeDialog} autoFocus>{cl.header.select_language.close}</button>
            </dialog>
        </>
    );
}

function LangPanel() {
    const initialLang = content.langs.find(lang => lang.short_name === stored.lang);
    const handleChange = (e) => {
        updatePreferences({
            lang: e.target.value
        })
    }

    return (
        <>
            <h3 className="text-left"><Icon icon="lang"/> {cl.header.select_language.title}</h3>
            <select name="language" className="inp" id="language" onChange={(e) => handleChange(e)}>
                {initialLang && (
                    <option value={initialLang.short_name}>
                        <span className="icon">{initialLang.icon}</span>{initialLang.long_name}
                    </option>
                )}
                {content.langs.map(lang => (
                    lang.short_name !== stored.lang && (
                        <option key={lang.short_name} value={lang.short_name}>
                            <span className="icon">{lang.icon}</span>{lang.long_name}
                        </option>
                    )
                ))}
            </select>
        </>
    );
}

function ThemePanel() {
    const initialTheme = cl.header.select_theme.themes.find(theme => theme.name === stored.theme);
    const handleChange = (e) => {
        updatePreferences({
            theme: e.target.value
        })
    }

    return (
        <>
            <h3 className="text-left"><Icon icon="theme"/> {cl.header.select_theme.title}</h3>
            <select name="theme" className="inp" id="theme" onChange={(e) => handleChange(e)}>
                {initialTheme && (
                    <option value={initialTheme.name}>
                        <span className="icon">{initialTheme.icon}</span>{initialTheme.value}
                    </option>
                )}
                {cl.header.select_theme.themes.map(them => (
                    them.name !== stored.theme && (
                        <option key={them.name} value={them.name}>
                            <span className="icon">{them.icon}</span>{them.value}
                        </option>
                    )
                ))}
            </select>
        </>
    );
}
