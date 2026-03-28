const TodoListItem = ({label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {
    let classNames = 'item-list-base label-text';

    if (done) {
        classNames += 'done';
    }

    if(important) {
        classNames += ' important';
    }

    return(
        <div className="row">
            <div className="col-6">
                <span onClick={onToggleDone} className={classNames}>
                    {label}
                </span>
            </div>
            <div className="col-6 buttons">
                {done ? (
                    <button type="button" onClick={onToggleDone} className="btn btn-outline-warning my-button mх-1">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                ) : (
                    <button tepe ="button" onClick={onToggleDone} className="btn btn-outline-success my-button mх-1">
                        <i className="fa-solid fa-check"></i>
                    </button>
                )}
                <button tepe ="button" onClick={onToggleImportant} className="btn btn-outline-primary my-button mх-1">
                    <i className="fa-solid fa-exclamation"></i>
                </button>
                <button tepe ="button" onClick={onDeleted} className="btn btn-outline-danger my-button mх-1">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )   
}

export default TodoListItem;