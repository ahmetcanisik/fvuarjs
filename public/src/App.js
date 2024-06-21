import Header from './components/header';
import TestArea from "./components/testArea";
import UpdateNotes from "./components/updateNotes";
import Footer from "./components/footer";

function App() {
    return (
        <div className="box">
            <Header />
            <TestArea />
            <UpdateNotes />
            <Footer />
        </div>
    );
}

export default App;