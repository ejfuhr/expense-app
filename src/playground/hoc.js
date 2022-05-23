///higher order components

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


const Info =(props) => (
    <div>
        <h1>info</h1>
        <p>the info is : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info...</p>}
            <WrappedComponent {...props} />
        </div>
    );

}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>please login to view......</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<div><p>wowo</p></div>, document.e('app'))

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<AuthInfo isAuthenticated= {true}  info="These are the details..." />);
// root.render(<AdminInfo isAdmin={true} info="These are the details..." />);