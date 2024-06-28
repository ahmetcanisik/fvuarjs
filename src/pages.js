import Layout from './Layout';
import Welcome from './components/welcome';
import UpdateNotes from './components/updateNotes';
import TestArea from './components/testArea';
import NotFound from './components/error';

export function Home() {
    return (
        <Layout>
            <Welcome />
        </Layout>
    );
}
export function ChangeLog() {
    return (
        <Layout>
            <UpdateNotes />
        </Layout>
    );
}
export function Test() {
    return (
        <Layout>
            <TestArea />
        </Layout>
    );
}
export function Error() {
    return (
        <Layout>
            <NotFound />
        </Layout>
    );
}