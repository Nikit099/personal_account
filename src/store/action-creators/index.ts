import * as ContactActionCreators from './contact'
import * as UserActionCreators from './user'

export default {
    ...ContactActionCreators,
    ...UserActionCreators
}