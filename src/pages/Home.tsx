import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage className="flex-1">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle size="large" className="bg-red-300 text-white">Started App</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Home;
