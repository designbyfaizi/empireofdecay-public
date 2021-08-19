import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/Error";
import SignUpPage from '../Pages/SignUp/SignUp';
import SignInPage from '../Pages/SignIn/SignIn';
import AccountPage from '../Pages/Account/Account'
import ContactUsPage from '../Pages/ContactUs/ContactUs'
import PrivacyPage from '../Pages/Privacy/Privacy'
import TermsPage from '../Pages/Terms/Terms'
import BlogsPage from '../Pages/Blogs/Blogs'
import BlogPage from '../Pages/Blog/Blog'
import InventoryPage from '../Pages/Inventory/Inventory'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
const Routes = () => {
    return(
                <Switch>

                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/signup">
                        <SignUpPage />
                    </Route>

                    <Route exact path="/signin">
                        <SignInPage />
                    </Route>

                    <Route exact path="/contact">
                        <ContactUsPage />
                    </Route>

                    <Route exact path="/privacy">
                        <PrivacyPage />
                    </Route>

                    <Route exact path="/terms">
                        <TermsPage />
                    </Route>
                    
                    <Route exact path="/blogs">
                        <BlogsPage />
                    </Route>
                    
                    <Route exact path="/blog">
                        <BlogPage />
                    </Route>
                    
                    <Route exact path="/redirect" component={() => {
                        window.open("https://designbyfaizi.tech/");
                        window.location.href = "/";
                        return null;
                    }}/>    

                    <Route exact path="/atomichub" component={() => {
                        window.open("https://wax.atomichub.io/");
                        window.location.href = "/inventory";
                        return null;
                    }}/>    
                    
                    <PrivateRoute path="/account">
                        <AccountPage />
                    </PrivateRoute>
                    
                    <PrivateRoute path="/inventory">
                        <InventoryPage />
                    </PrivateRoute>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
    );
}
export default Routes;