import React, {Suspense, lazy} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import { LayoutLoader } from './components/layout/Loaders'

const Home = lazy(() => import('./Pages/Home'))
const Login = lazy(() => import('./Pages/Login'))
const Chat = lazy(() => import('./Pages/Chat'))
const Groups = lazy(() => import('./Pages/Groups'))
const NotFound = lazy(() => import('./Pages/NotFound'))

const AdminLogin = lazy(() => import('./Pages/admin/AdminLogin'))
const Dashboard = lazy(() => import('./Pages/admin/Dashboard'))
const UsersManagement = lazy(() => import('./Pages/admin/UsersManagement'))
const ChatsManagement = lazy(() => import('./Pages/admin/ChatsManagement'))
const MessagesManagement = lazy(() => import('./Pages/admin/MessagesManagement'))


let user = true;

const App = () => {
  return (
    <BrowserRouter>
    {/* <Routes>
      <Route 
        // exact    //find what this prop does
        path="/" 
        element={
          <ProtectRoute user={user}>
            <Home />
          </ProtectRoute>
        } 
      />
      <Route path="/login" element={<Login />} />
      <Route path="/chat/:chatId" element={<Chat />} />
      <Route path="/groups" element={<Groups />} />

      {/* Specify paths by components as 👆 or elements as 👇 */}

      {/* <Route exact path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} /> */}
    {/* </Routes>  */}

    {/* Protecting page navigation & redirect routes */}

        <Suspense 
          fallback={
          <LayoutLoader />
          }
        >
          <Routes>
            <Route 
              element={
                <ProtectRoute user={user} />
              }
            >
              <Route 
                path='/' 
                element={<Home />} 
              />

              <Route 
                path='/chat/:chatId' 
                element={<Chat />} 
              />

              <Route 
                path='/groups' 
                element={<Groups />} 
              />
            </Route>

            <Route 
              path='/login'
              element={
                <ProtectRoute
                  user={user}
                  redirect='/'
              >
                  <Login />
                </ProtectRoute>
              } 
            />

            <Route 
              path='/admin' 
              element={<AdminLogin />}
            />
            <Route 
              path='/admin/dashboard' 
              element={<Dashboard />}
            />
            <Route 
              path='/admin/users-management' 
              element={<UsersManagement />}
            />
            <Route 
              path='/admin/chats-management' 
              element={<ChatsManagement />}
            />
            <Route 
              path='/admin/messages-management' 
              element={<MessagesManagement />}
            />
        
            <Route 
              path='*' 
              element={<NotFound />} 
            />

          </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default App