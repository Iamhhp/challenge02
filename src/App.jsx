import { useRoutes } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout/RootLayout';
import listRouter from './Routes/routes';

function App() {
  const routes = useRoutes(listRouter);

  return routes;
}
export default App;
