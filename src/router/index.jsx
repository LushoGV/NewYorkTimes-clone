import {createBrowserRouter} from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import SectionPage from '../pages/SectionPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage code={404}/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/section/:section',
                element: <SectionPage/>,
            },{
                path: '/*',
                element: <ErrorPage code={404}/>
            }
        ]
    },
   
])