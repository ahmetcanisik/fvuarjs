import { types } from './lib/data';
export default function GetTypes() {
    return (
        <aside>
            {
                types.map(type => (
                    <div>{type}</div>
                ))
            }
        </aside>
    );
}