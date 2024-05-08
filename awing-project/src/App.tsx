import useRouteElements from './useRouteElements'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const routeElement = useRouteElements()
  return <div>{routeElement}</div>
}

export default App
