import { useRoutes } from 'react-router-dom'
import Demo from './pages/Demo'

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <Demo />,
    },
  ])
  return routeElement
}
