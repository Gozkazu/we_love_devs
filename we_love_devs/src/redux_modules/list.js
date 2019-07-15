import {arrayMove} from 'react-sortable-hoc';

const initialState = {
  list: [
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/damien.jpg"},
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/vincent.jpg"},
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/thomas.jpg"},
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/martin.jpg"},
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/alexis.png"},
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/nicolas.jpg"},
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/clement.png"},
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/quentin.png"},
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/pierre.png"},
    {id: Math.random(), imgUrl: "https://welovedevs.com/images/alexandre.png"},
  ]
}

export default (state = initialState , action) => {
 switch (action.type) {
  case 'REORDER_LIST':
   return {
    ...state,
    list: arrayMove(state.list, action.payload.oldIndex, action.payload.newIndex)
   }
  default:
   return state
 }
}

export function orderList(oldIndex, newIndex) {
  return {
    type: 'REORDER_LIST',
    payload: {oldIndex, newIndex},
  }
}