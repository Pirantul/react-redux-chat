export const setActiveUser = (id) => ({type: 'SET_ACTIVE_USER', payload: id}); 
export const inputChatText = (id, text) => ({tape: 'INPUT_CHAT_TEXT', payload: {id: id, text: text}});