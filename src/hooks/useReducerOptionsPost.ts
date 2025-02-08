import { useReducer } from 'react'

type ReducerType = {
    state: {
      component: 'popover' | 'modal' | ''
    }
    action: {
      type: 'OPEN_POPOVER' | 'OPEN_MODAL' | 'CLOSE'
    }
  }

function reducer (state:ReducerType['state'], action: ReducerType['action']): ReducerType['state'] {
  switch (action.type) {
    case 'OPEN_POPOVER':
      return { component: 'popover' }
    case 'OPEN_MODAL':
      return { component: 'modal' }
    case 'CLOSE':
      return { component: '' }
    default:
      return state
  }
}

export const useReducerOptionsPost = () => {
  const [view, dispatch] = useReducer(reducer, { component: '' })

  return {
    view,
    dispatch
  }
}
