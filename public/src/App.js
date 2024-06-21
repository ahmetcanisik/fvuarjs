import GetTypes from './components/getTypes';
function App() {
    return (
        <>
            <h1>enviorement: {process.env.NODE_ENV}</h1>
            <GetTypes />
        </>
    );
}

export default App;