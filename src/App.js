import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ChangeLog, Error, Home, Testing, Notes} from "./pages";
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
            <div className="showcase pattern-zigzag-xl">
                <Header />
                <main className="box">
                    <Router>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/changelog' element={<ChangeLog />} />
                            <Route path="/testing" element={<Testing />} />
                            <Route path="/notes" element={<Notes />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </Router>
                </main>
                <Footer />
            </div>
        </PreferencesProvider>
    );
}

export default App;