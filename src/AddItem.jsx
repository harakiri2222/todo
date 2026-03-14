const AddItem = ({onAddItem}) => {
    return(
        <div className="item-add-form">
            <div className="row">
                <div className="col-5">
                    <input className="form-control" placeholder="Сюда писать дела"/>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-info" onClick={() => onAddItem('text')}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddItem;