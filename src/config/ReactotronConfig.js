import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native';

import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron
    .configure({ name: 'Redux Mastering' })
    .useReactNative()
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();
  console.tron = tron;
}
