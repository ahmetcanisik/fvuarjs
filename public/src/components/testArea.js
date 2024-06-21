import { cl, fv } from './lib/utilities';
import { themeButtons, posX } from "./lib/data";

export default function TestArea() {
    return (
        <fieldset className="outbox">
            <legend>
                <h1>{cl.title}</h1>
            </legend>
            <CopyPanel />
            <BtnPanel />
            <PosPanel />
        </fieldset>
    );
}

function CopyPanel() {
    const copy = () => {
        fv.copiedClipboard({
            target: '#testInp',
            type: "success",
            time: 4,
            position: "top-right"
        })
    }

    return (
        <div className="panel copyPanel">
            <h3 aria-label={cl.copy_panel.aria}>{cl.copy_panel.title}</h3>
            <div className="control">
                <input type="text" placeholder={cl.copy_panel.inp_placeholder}
                       aria-label={cl.copy_panel.inp_placeholder} className="inp" id="testInp"/>
                <button type="button" className="btn" id="btnCopy" onClick={copy}>{cl.copy_panel.btn_copy}</button>
            </div>
            <h3>{cl.new_alert.title}</h3>
        </div>
    );
}

function BtnPanel() {
    return (
        <fieldset className="panel btnPanel">
            <legend>{cl.new_alert.theme_title}</legend>

            <ul>
                {
                    themeButtons.map((button, i) => (
                        <li key={i}>
                            <button type="button" className={`btn ${button.type}`} onClick={() => fv.newAlert({
                                type: button.type,
                                text: button.text,
                                time: button.time,
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
            <legend>{cl.new_alert.position_title}</legend>

            <ul>
                {
                    posX.map((pos, i) => (
                        <li key={i}>
                            <button type="button" className="btn success" onClick={() => fv.newAlert({
                                type: "success",
                                text: pos.replace('-', ' '),
                                position: pos,
                                time: 4
                            })}>{pos.replace('-', ' ')}</button>
                        </li>
                    ))
                }
            </ul>
        </fieldset>
    );
}