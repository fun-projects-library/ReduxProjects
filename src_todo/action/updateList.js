

const ADD = "ADD";

const DELETE = "DELETE";

const EDIT = "EDIT";


export const addTodo  = (param)=>{
    return { type: ADD, content: param };
};

export const deleteTodo = (param) => {
    return { type: DELETE, index: param}
};

export const editTodo = (indexParam, contentParam) => {
    return { type: EDIT, index:indexParam, content: contentParam }
}