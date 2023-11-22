import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Shop } from '@/components/shop/Shop';
import { App } from '@/components/app';

const root = document.getElementById('root');

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/shop',
                element: <Shop />,
                
            }
        ],

    }
])

container.render(<RouterProvider router={router} />);