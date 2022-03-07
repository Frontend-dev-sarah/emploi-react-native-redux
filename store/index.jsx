import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk  from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(
    reducers,
    {},
    compose(
    applyMiddleware(thunk),
    autoRehydrate()
    )
);
persistStore(store, {storage: AsyncStorage, whitelist: ['likedjobs']})
export default store;