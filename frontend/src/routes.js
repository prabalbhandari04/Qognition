import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './Components/Dashboard';

import DashboardLayoutDoctor from './Components/DashboardDoctor';

import React from 'react';

import Dashboard from './pages/Dashboard';
import Home from './pages/Front/Home';
import Service from './pages/Front/Service';
import Login from './pages/Login';
import Register from './pages/Register';
import Doctors from './pages/Doctors';

import PrivateRoute from './privateroute';
import PrivateRouteDoctor from './privateroutedoctor';
import Profile from './pages/Profile';


import DashboardDoctor from './pages/Doctor/DashboardDoctor';
import LoginDoctor from './pages/Doctor/LoginDoctor';
import RegisterDoctor from './pages/Doctor/RegisterDoctor';
import ProfileDoctor from './pages/Doctor/ProfileDoctor';

import Doctorsprofile from './pages/Doctorsprofile';
import Queries from './pages/Queries';
import Reply from './pages/Reply';
import Files from './pages/Files';

import QueriesDoctor from './pages/Doctor/QueriesDoctor';
import ReplyDoctor from './pages/Doctor/ReplyDoctor';
import Medication from './pages/Medication';
import Allergies from './pages/Allergies';
import Immunization from './pages/Immunization';
import FilesDoctor from './pages/FilesDoctor';
import Page404 from './pages/Front/Page404';
import Contact from './pages/Front/Contact';







// ----------------------------------------------------------------------

const Router = props => {

return (
  <>


  
  <Routes>
  
  <Route exact path="/" element={<Home/>} />
  <Route exact path="/service" element={<Service/>} />
  <Route exact path="/contact" element={<Contact/>} />

  <Route exact path='*' element={<Page404/>} /> 

  
  <Route exact path="/register" element={<Register/>} />
  <Route exact path="/login" element={<Login/>} />

  <Route exact path="/registerdoctor" element={<RegisterDoctor/>} />
  <Route exact path="/logindoctor" element={<LoginDoctor/>} />  



  <PrivateRoute path="/dashboard" component={DashboardLayout} redirectTo="/login">
    <PrivateRoute path="/" component={Dashboard} redirectTo="/login"/>
    <PrivateRoute path="/doctors" component={Doctors} redirectTo="/login"/>
    <PrivateRoute path="/doctor/:id" component={Doctorsprofile} redirectTo="/login"/>
    <PrivateRoute path="/queries" component={Queries} redirectTo="/login"/>
    <PrivateRoute path="/files" component={Files} redirectTo="/login"/>
    <PrivateRoute path="/medication" component={Medication} redirectTo="/login"/>
    <PrivateRoute path="/allergies" component={Allergies} redirectTo="/login"/>
    <PrivateRoute path="/immunization" component={Immunization} redirectTo="/login"/>
    <PrivateRoute exact path="/queries/:id" component={Reply} />
  </PrivateRoute>

  <PrivateRoute path="/profile" component={DashboardLayout} redirectTo="/login">
    <PrivateRoute path="/" component={Profile} redirectTo="/login"/>
  </PrivateRoute>

  

  <PrivateRouteDoctor path="/dashdoctor" component={DashboardLayoutDoctor} redirectTo="/logindoctor">
    <PrivateRouteDoctor path="/" component={DashboardDoctor} redirectTo="/logindoctor"/>
    <PrivateRouteDoctor path="/queries" component={QueriesDoctor} redirectTo="/login"/>
    <PrivateRouteDoctor exact path="/queries/:id" component={ReplyDoctor} />
    <PrivateRouteDoctor path="/filesdoctor" component={FilesDoctor} redirectTo="/login"/>
  </PrivateRouteDoctor>

  <PrivateRouteDoctor path="/profiledoctor" component={DashboardLayoutDoctor} redirectTo="/logindoctor">
    <PrivateRouteDoctor path="/" component={ProfileDoctor} redirectTo="/logindoctor"/>
  </PrivateRouteDoctor>



  
</Routes>

</>

);
};

export default Router;