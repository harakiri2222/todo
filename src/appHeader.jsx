const AppHeader = ({done, active}) =>{
    return(
        <div className="row">
            <div className="col-6">
                <h1>My todo list</h1>
            </div>
            <div className="col-6">
                <h1 className="text-secondary">{active} активно, {done} cделано</h1>
            </div>
        </div>
    );
}

export default AppHeader;