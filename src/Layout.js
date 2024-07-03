import Header from './components/header';
import Footer from "./components/footer";
import { PreferencesProvider } from "./components/hooks";
import { stored, configurationMetaTags } from './components/lib/utilities';

function Layout({ children, page }) {
    console.log(page)
    configurationMetaTags({
        title: stored.cl.page[page].meta.title,
        description: stored.cl.page[page].meta.description
    })
    return (
        <Box>
            <PreferencesProvider>
                <Header />
                {children}
                <Footer />
            </PreferencesProvider>
        </Box>
    );
}

function Box({ children }) {
    return (
        <div className="box">
            {children}
        </div>
    );
}

export default Layout;