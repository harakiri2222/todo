import React from "react";

class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false 
    }

    onLabelClick = () => {
        console.log(`Нажато: ${this.props.label}`)
        //запомнить метод setState! он переключается true/false
        this.setState(
            ({done}) => {
                return {
                    done: !done
                }
            }
        );
    }

        onMarkImportant = () => {
            this.setState(
        
        ({important}) => {
            return {
                important: !important
            }
        }
        );
    }

    render () {
        
        const {label} = this.props;
        const {done, important} = this.state
        let labelClass = 'item-list-base';
        if(done) { // если done истинный и равен true
            labelClass = labelClass + ' done';
        }
        if(important) {
            labelClass = labelClass + ' important';   
        }

        return(
            <div>
                <span className={labelClass} onClick={this.onLabelClick}>{label}</span>
                <button onClick={this.onMarkImportant} type="button" className="btn btn-outline-success">
                    <i className="fa-solid fa-exclamation"></i>
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={this.props.onDeleted}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        )
    }
}

export default TodoListItem;