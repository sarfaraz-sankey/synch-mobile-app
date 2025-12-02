import { IonIcon, IonTabBar, IonTabButton } from "@ionic/react";

import {
  bookOutline,
  callOutline,
  clipboardOutline,
  micOutline,
  navigateOutline,
} from "ionicons/icons";

const BottomTabBar: React.FC = () => {
  return (
    <IonTabBar slot="bottom" className="custom-tab-bar">
      <IonTabButton tab="ptt" href="/ptt">
        <IonIcon icon={micOutline} />
      </IonTabButton>

      <IonTabButton tab="map" href="/map">
        <IonIcon icon={navigateOutline} />
      </IonTabButton>

      <IonTabButton tab="logs" href="/logs">
        <IonIcon icon={callOutline} />
      </IonTabButton>

      <IonTabButton tab="incident" href="/incident">
        <IonIcon icon={bookOutline} />
      </IonTabButton>

      <IonTabButton tab="contact" href="/contact">
        <IonIcon icon={clipboardOutline} />
      </IonTabButton>
    </IonTabBar>
  );
};

export default BottomTabBar;
