import {stored} from './lib/utilities';

export default function UpdateNotes() {
    return (
        <fieldset className="outbox">
            <legend><h1>{stored.cl.update_notes.title}</h1></legend>
            {
                stored.cl.update_notes.version.map((version, index) => (
                    <fieldset className="panel" key={index}>
                        <legend><h3>{stored.cl.update_notes.ver} {version.v} { version.test && `(${stored.cl.update_notes.testing})` }</h3></legend>
                        <ol>
                            {
                                version.list.map((log, i) => (
                                    <li key={i}>
                                        {log}
                                    </li>
                                ))
                            }
                        </ol>
                    </fieldset>
                ))
            }
        </fieldset>
    );
}