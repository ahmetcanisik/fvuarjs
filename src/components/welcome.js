import { stored } from "./lib/utilities";
import { fv } from './lib/utilities';

export default function Welcome() {
    fv.new({
        text: stored.cl.alert.building,
        theme: "warning",
        position: "top-center",
        displayTime: 3
    })
    setTimeout(() => {
        fv.new({
            text: stored.cl.alert.showing,
            position: "center-left"
        })
    }, 1000);
    return (
        <div className="welcome pattern-dots-lg">
            <h1 translate="no" className="welcome-title"><span className="welcome-logo">fvuar</span><span className="js-text">JS</span></h1>
        </div>
    );
}