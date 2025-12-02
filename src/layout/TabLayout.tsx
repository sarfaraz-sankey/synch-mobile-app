import { IonContent, IonFooter, IonPage } from "@ionic/react";
import AppHeader from "../components/AppHeader/AppHeader";

const TabLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <IonPage>
      <AppHeader />
      <IonContent>{children}</IonContent>

      {/* Yellow strip INSIDE IonPage → correct position */}
      <IonFooter
        style={{
          backgroundColor: "#ffb733",
          textAlign: "center",
          padding: "10px 0",
          fontWeight: 600,
          color: "#000",
          height: "100px",
        }}
      >
        Constant Yellow Strip Text
      </IonFooter>
    </IonPage>
  );
};

export default TabLayout;
