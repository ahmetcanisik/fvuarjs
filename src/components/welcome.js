import Alert from "./alert";
import { stored } from "./lib/utilities";

export default function Welcome() {
    return (
        <div className="welcome">
            <h1 className="welcome-title"><span className="welcome-logo">fvuar</span><span className="js-text">JS</span></h1>
            <span>{stored.cl.header.welcome_text}</span>
            <Alert type="error">
                {stored.cl.alert.building}
            </Alert>
        </div>
    );
}