import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ChangeLog, Error, Home, Test} from "./pages";
import Header from "./components/header";
import Footer from "./components/footer";
import {PreferencesProvider, usePath} from "./components/hooks";
import {configurationMetaTags, stored} from "./components/lib/utilities";

function App() {
    const path = usePath();
    let pageName;

    if (path === "/") {
        pageName = "home";
    } else {
        pageName = path.replace('/', '')
    }

    configurationMetaTags({
        title: stored.cl.page[pageName].meta.title,
        description: stored.cl.page[pageName].meta.description
    })

    return (
        <PreferencesProvider>
            <Header />
            <main className="box">
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/update-notes' element={<ChangeLog />} />
                        <Route path="/test" element={<Test />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </main>
            <Footer />
        </PreferencesProvider>
    );
}

export default App;