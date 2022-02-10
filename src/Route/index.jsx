import Home from "../Page/Home";
import { Switch,Route } from "react-router-dom";

const Router = () => {

    return (
        <>
        <Switch>
            <Route exact path="/">
                <Home />
                
            </Route>
        </Switch>
        </>
    )
}

export default Router;

