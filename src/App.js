
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Components/utils/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="">
        {/* 
      Head
      Body
        Side Bar
          Menu Items
        MainContainer
          ButtonList
          Video Container
            Video Cards
      */}

        <Header />
        <Body />
      </div>
    </Provider >
  );
}

export default App;
