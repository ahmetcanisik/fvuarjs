import { useRef } from 'react';
import '../styles/alert.css';
export default function Alert({ type = "default", children }) {
    const alert = useRef();
    switch(type) {
        case 'default':
           type = "alert-default";
           break;
        case 'success':
            type = "alert-success";
            break;
        case 'info':
            type = "alert-info";
            break;
        case 'warn':
            type = "alert-warn";
            break;
        case 'error':
            type = "alert-error";
            break;
        default:
            break;
    }
    const closeButtonClicked = () => {
        alert.current.remove();
    }
    return (
        <div ref={alert} className={`alert ${type}`}>
            <div className="content">{children}</div>
            <button type="button" title='close' onClick={closeButtonClicked} className={`alert-button ${type}`}>X</button>
        </div>
    );
}