import  ActionCreators from './../store/action-creators/index';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}