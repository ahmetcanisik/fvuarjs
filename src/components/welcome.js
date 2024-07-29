import Alert from "./alert";
import { stored } from "./lib/utilities";


export default function Welcome() {
    return (
        <div className="welcome">
            <h1 translate="no" className="welcome-title"><span className="welcome-logo">fvuar</span><span className="js-text">JS</span></h1>
            <span>{stored.cl.long_name}</span>
            <Alert type="warn">
                {stored.cl.alert.building }
            </Alert>
            <Alert type="info">
                {stored.cl.alert.showing}
            </Alert>
        </div>
    );
}