import { IonFooter } from "@ionic/react";

const HeaderStrip: React.FC = () => {
  return (
    <IonFooter
      style={{
        backgroundColor: "#ffb733",
        textAlign: "center",
        padding: "10px 0",
        fontWeight: 600,
        color: "#000",
      }}
    >
      Constant Yellow Strip Text
    </IonFooter>
  );
};

export default HeaderStrip;
