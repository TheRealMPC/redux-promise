// Initial state
const initialState = {
   profile: {},
   favoriteCharacters: []
}

// Actions
const ADD_PROFILE = 'user/ADD_PROFILE'
const ADD_PROFILE_PENDING = 'user/ADD_PROFILE_PENDING'
const ADD_PROFILE_REJECTED = 'user/ADD_PROFILE_REJECTED'
const ADD_PROFILE_FULFILLED = 'user/ADD_PROFILE_FULFILLED'
const ADD_CHARACTER = 'user/ADD_CHARACTER'

// Action creators
export function addProfile(promise) {
   return {
      type: ADD_PROFILE,
      payload: promise
   }
}

export function addCharacter(character) {
   return {
      type: ADD_CHARACTER,
      character: character
   }
}

// Reducer
export default function userReducer(state=initialState, action) {
   switch (action.type) {
      case ADD_PROFILE_PENDING:
         return Object.assign({}, state, {profile: action.payload})
      case ADD_PROFILE_REJECTED:
         return Object.assign({}, state, {profile: action.payload})
      case ADD_PROFILE_FULFILLED:
         return Object.assign({}, state, {profile: action.payload.data})
      case ADD_CHARACTER:
         return Object.assign({}, state, {favoriteCharacters: [...state.favoriteCharacters, action.character]})
      default:
         return state
   }
}

