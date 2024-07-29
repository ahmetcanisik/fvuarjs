import Welcome from './components/welcome';
import UpdateNotes from './components/updateNotes';
import TestArea from './components/testArea';
import NotFound from './components/error';
import Readme from './components/readme';

export function Home() {return (
    <>
        <Welcome />
        <Readme />
    </>
)}
export function ChangeLog() {return (<UpdateNotes />)}
export function Test() {return (<TestArea />)}
export function Error() {return (<NotFound />);}