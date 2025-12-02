import { IonApp, IonRouterOutlet, IonTabs, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import BottomTabBar from "./navigations/BottomTabBar";
import Contact from "./pages/Contacts/Contact";
import Incidents from "./pages/Incidents/Incidents";
import Logs from "./pages/Logs/Logs";
import MapPage from "./pages/Map/Map";
import PTT from "./pages/PTT/PTT";

setupIonicReact();

const App: React.FC = () => (
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

export default App;
