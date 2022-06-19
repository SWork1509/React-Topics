export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newItems = [...state.people, action.payload]
        return { ...state, people: newItems, isModalOpen: true, modalContent: 'Item added' }
    } else if (action.type === 'NO_VALUE') {
        return { ...state, isModalOpen: true, modalContent: 'Please enter value' };
    } else if (action.type === 'CLOSE_MODAL') {
        return { ...state, isModalOpen: false }
    } else if (action.type === 'REMOVE_ITEM') {
        console.log(state, action)
        const newPeople = state.people.filter(person => person.id !== action.payload.id);
        return { ...state, people: newPeople, isModalOpen: true, modalContent: 'Item removed' };
    }
    throw new Error('No matching action');
}