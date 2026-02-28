const TodoListItem = ({label, important = false}) => {
    const itemStyle = {
        color: important ? 'black' : 'red'
    }
    return(
        <span style={itemStyle}>{label}</span>   
    )
}

export default TodoListItem;