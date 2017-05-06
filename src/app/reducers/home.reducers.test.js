import { PENDING, REJECTED, FULFILLED } from 'redux-promise-middleware'
import { homeReducers } from './home.reducers'
import { API_FETCH } from 'app/actions/types'

describe('Home Reducers', ()=> {
  const initialState = {
    isPending: false,
    error: false,
    data: [],
  }
  const irrelevantAction = { type: 'IRRELEVANT_ACTION' }

  it('returns the initialState when no state', () => {
    expect(homeReducers(undefined, irrelevantAction)).to.eql(initialState)
  })

  describe('API_FETCH_PENDING', ()=> {
    const stateBeforeDispatch = {
      data: 'test dirty data',
      error: new Error('test previous state error'),
      isPending: !initialState.isPending,
    }

    it('sets initialState with isPending=true', ()=> {
      const apiFetchPendingAction = {
        type: `${API_FETCH}_${PENDING}`,
      }
      expect(
        homeReducers(stateBeforeDispatch, apiFetchPendingAction)
      ).to.eql({
        ...initialState,
        isPending: true,
      })
    })
  })

  describe('API_FETCH_REJECTED', ()=> {
    const stateBeforeDispatch = {
      data: 'test dirty data',
      error: new Error('test previous state error'),
      isPending: !initialState.isPending,
    }

    it('sets initialState with payload as error', ()=> {
      const apiFetchRejectedAction = {
        type: `${API_FETCH}_${REJECTED}`,
        error: true,
        payload: new Error('api_fetch error'),
      }
      expect(
        homeReducers(stateBeforeDispatch, apiFetchRejectedAction)
      ).to.eql({
        ...initialState,
        error: apiFetchRejectedAction.payload,
      })
    })
  })

  describe('API_FETCH_FULFILLED', ()=> {
    const stateBeforeDispatch = {
      data: 'test dirty data',
      error: new Error('test previous state error'),
      isPending: !initialState.isPending,
    }

    it('sets initialState with payload as data', ()=> {
      const apiFetchFulfilledAction = {
        type: `${API_FETCH}_${FULFILLED}`,
        error: true,
        payload: {
          home: [ 'some', 'test', 'data' ],
        },
      }
      expect(
        homeReducers(stateBeforeDispatch, apiFetchFulfilledAction)
      ).to.eql({
        ...initialState,
        data: apiFetchFulfilledAction.payload.home,
      })
    })
  })
})
