import { useState } from "react";

const AddItem = ({onAddItem}) => {
const [value,setValue] = useState('');
const handleAdd = () => {
    onAddItem(value);
    setValue('');
};

    return(
        <div className="item-add-form">
            <div className="row">
                <div className="col-7">
                    <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                     className="form-control" 
                     placeholder="Сюда писать дела"/>
                </div>
                
                <div className="col-5">
                    <button
                     className="btn btn-outline-info w-100" 
                    onClick={handleAdd}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddItem;