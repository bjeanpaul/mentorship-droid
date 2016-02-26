import configureStore from '../configureStore'

import { login } from '../../actions/user'

describe('user', function() {
  it('testing our api thingy', function() {


    const store = configureStore()

    store.dispatch(login('admin', '123'))



  })
})
