import { Navigate } from 'react-router-dom';
import RootLayout from '../Layouts/RootLayout/RootLayout';
import Home from '../Pages/Home/Home';

const listRouter = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Navigate to={'/Home'} replace />, index: true },
      { path: '/*', element: <Home /> },
    ],
  },
];
export default listRouter;
