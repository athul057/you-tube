import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Components/utils/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '', // Use empty path for MainContainer under '/'
        element: <MainContainer />
      },
      {
        path: 'watch/',
        element: <WatchPage />
      }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
