import actions from './Actions'
const initialstate = {};

const Reducer = (state= initialstate, action) => {
    switch (action.type){
        case(actions.STORE_USER):
          return action.payload;
        default:
          return state;
    }

}

export default Reducer;