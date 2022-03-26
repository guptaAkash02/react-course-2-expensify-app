// Higher Order Component (HOC) - A component (HOC) that renders another componenet

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
     <h1>info</h1>
     <p>the info is : {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAdmin && <p>this is private info. please dont share</p>}
        <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) =>{
    return (props)=>(
        <div>
       {props.isAuthinticated? (
        <WrappedComponent {...props} />
       ):(
        <p>please login to view application</p>
       )}
        </div>
    )
}

const AdminInfo = withAdminWarning (Info)
const AuthInfo = requireAuthentication (Info)
//ReactDOM.render(<AdminInfo isAdmin={true} info ="there are details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthinticated={true} info ="there are details" />, document.getElementById('app'))