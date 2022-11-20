import {createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import SectionPage from '../pages/SectionPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/section/:section',
                element: <SectionPage/>,
            }
        ]
    },
   
])