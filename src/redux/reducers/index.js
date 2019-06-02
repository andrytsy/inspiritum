import { EDIT_TIME, SET_DAY } from '../constants'
import defaultData from '../fixtures' 

export default (state = defaultData, action) => {
    const { type, time, day } = action

    switch (type) {
        case EDIT_TIME:
            return {
                ...state,
                editableTime: time
            }
        
        case SET_DAY: 
            return {
                ...state,
                currentDay: day
            }

        default: 
            return {
                columns: state,
                editableTime: null,
                currentDay: 0
            }
    }
}
