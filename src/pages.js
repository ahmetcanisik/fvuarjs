import Layout from './Layout';
import Welcome from './components/welcome';
import UpdateNotes from './components/updateNotes';
import TestArea from './components/testArea';
import NotFound from './components/error';

export function Home() {
    return (
        <Layout page="home">
            <Welcome />
        </Layout>
    );
}
export function ChangeLog() {
    return (
        <Layout page="update-notes">
            <UpdateNotes />
        </Layout>
    );
}
export function Test() {
    return (
        <Layout page="test">
            <TestArea />
        </Layout>
    );
}
export function Error() {
    return (
        <Layout page="404">
            <NotFound />
        </Layout>
    );
}