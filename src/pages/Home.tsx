import { IonApp, IonRouterOutlet, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import BottomTabBar from "../navigations/BottomTabBar";
import Contact from "./Contacts/Contact";
import Incidents from "./Incidents/Incidents";
import Logs from "./Logs/Logs";
import MapPage from "./Map/Map";
import PTT from "./PTT/PTT";

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* Default redirect must be inside IonRouterOutlet */}
            <Route path="/" exact>
              <Redirect to="/ptt" />
            </Route>

            <Route exact path="/contact" component={Contact} />
            <Route exact path="/incident" component={Incidents} />
            <Route exact path="/logs" component={Logs} />
            <Route exact path="/map" component={MapPage} />
            <Route exact path="/ptt" component={PTT} />
          </IonRouterOutlet>

          <BottomTabBar />
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default Home;
