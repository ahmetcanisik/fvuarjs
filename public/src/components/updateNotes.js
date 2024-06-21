import { cl } from './lib/utilities';
export default function UpdateNotes() {
    return (
        <fieldset className="outbox">
            <legend><h2>{cl.update_notes.title}</h2></legend>
            <fieldset className="panel">
                <legend><h3>{cl.update_notes.version.v1_4.title}</h3></legend>
                <ol>
                    {
                        cl.update_notes.version.v1_4.list.map((log, i) => (
                            <li key={i}>
                                {log}
                            </li>
                        ))
                    }
                </ol>
            </fieldset>
        </fieldset>
    );
}