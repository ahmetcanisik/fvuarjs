import React, { createContext, useState, useContext, useEffect } from 'react';
import { content } from './lib/data';
import { stored } from './lib/utilities';

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
    const [preferences, setPreferences] = useState(() => {
        const savedPreferences = localStorage.getItem('preferences');
        return savedPreferences ? JSON.parse(savedPreferences) : {
            lang: 'en-US',
            theme: 'system',
            colors: "static"
        };
    });

    useEffect(() => {
        stored.cl = content[preferences.lang];
        if (preferences.theme !== 'system') {
            document.documentElement.dataset.theme = preferences.theme;
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
        localStorage.setItem('preferences', JSON.stringify(preferences));
    }, [preferences]);

    return (
        <PreferencesContext.Provider value={{ preferences, setPreferences }}>
            {children}
        </PreferencesContext.Provider>
    );
};

export const usePreferences = () => useContext(PreferencesContext);

export const useUpdatePreferences = () => {
    const { setPreferences } = usePreferences();

    const updatePreferences = ({ lang, theme, colors }) => {
        setPreferences(prevPreferences => ({
            lang: lang || prevPreferences.lang,
            theme: theme || prevPreferences.theme,
            colors: colors || prevPreferences.colors
        }));
    };

    return updatePreferences;
};

export function usePath() {return window.location.pathname};