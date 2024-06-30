import Header from './components/header';
import Footer from "./components/footer";
import { PreferencesProvider } from "./components/hooks";

function Layout({ children }) {
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