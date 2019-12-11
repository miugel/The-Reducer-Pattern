export const initialState = [
    {
        id: Date.now(),
        name: 'Learn about reducers',
        completed: false
    }
];

export const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_DO':
            return [...state, {
                id: Date.now(),
                name: action.payload,
                completed: false
            }];
        
        case 'TOGGLE_COMPLETE':
            return state.map(item => (
                item.id === action.payload ? {...item, completed: !item.completed} : item
            ));

        case 'REMOVE_COMPLETED':
            return state.filter(item => {
                return item.completed === false;
            });
        
        default:
            return state;
    };
};