import { stored, fv } from './lib/utilities';
import { themeButtons, posX, content } from "./lib/data";

export default function TestArea() {
    return (
        <fieldset className="outbox">
            <legend>
                <h1>{stored.cl.title} {content.version} {`(${stored.cl.update_notes.testing})`}</h1>
            </legend>
            <CopyPanel />
            <BtnPanel />
            <PosPanel />
        </fieldset>
    );
}

function CopyPanel() {
    const copy = () => {
        fv.copy('#testInp',true, {
            theme: "success",
            text: "Copied!",
            displayTime: 4,
            position: "bottom-center"
        })
    }

    return (
        <div className="panel copyPanel">
            <h3 aria-label={stored.cl.copy_panel.aria}>{stored.cl.copy_panel.title}</h3>
            <div className="control">
                <input type="text" placeholder={stored.cl.copy_panel.inp_placeholder}
                       aria-label={stored.cl.copy_panel.inp_placeholder} className="inp" id="testInp"/>
                <button type="button" className="btn" id="btnCopy" onClick={copy}>{stored.cl.copy_panel.btn_copy}</button>
            </div>
            <h3>{stored.cl.new_alert.title}</h3>
        </div>
    );
}

function BtnPanel() {
    return (
        <fieldset className="panel btnPanel">
            <legend>{stored.cl.new_alert.theme_title}</legend>

            <ul>
                {
                    themeButtons.map((button, i) => (
                        <li key={i}>
                            <button type="button" className={`btn ${button.type}`} onClick={() => fv.new({
                                theme: button.type,
                                text: button.text,
                                displayTime: button.time,
                                position: button.position
                            })}>{button.type}</button>
                        </li>
                    ))
                }
            </ul>
        </fieldset>
    );
}

function PosPanel() {
    return (
        <fieldset className="panel posPanel">
            <legend>{stored.cl.new_alert.position_title}</legend>

            <ul>
                {
                    posX.map((pos, i) => (
                        <li key={i}>
                            <button type="button" className="btn success" onClick={() => fv.new({
                                theme: "success",
                                text: pos.replace('-', ' '),
                                position: pos,
                                displayTime: 4
                            })}>{pos.replace('-', ' ')}</button>
                        </li>
                    ))
                }
            </ul>
        </fieldset>
    );
}