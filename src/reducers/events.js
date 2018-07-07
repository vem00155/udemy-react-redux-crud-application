import _ from 'lodash'
import { 
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENTS 
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
       // {id: 8, title: "Let's have an event 8!", body: "This is the body for event 8."}
      //console.log(action);
      //console.log(action.response.data);
      const data = action.response.data;
      return { ...events, [data.id]: data }
    case READ_EVENTS:
	// [
	//   {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
	//   {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
	// ]
	// {
	//   1: {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
	//   2: {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
	// }
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENTS:
      //console.log(action.id);
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
}

