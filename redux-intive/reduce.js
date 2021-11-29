const { createState } = require('redux');

let users = ["foo", "bar", "qux"];


function counter(state = users, action){
    switch(action.payload){
        case 'ADD':
        return [...state, action.name];
        default:
        return state;
    }
}

let store = createStore(counter);

store.subscribe(()=> {
    console.log(store.getStore())
});