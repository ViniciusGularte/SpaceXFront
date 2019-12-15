import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg
} from "@ionic/react";
import React from "react";
import { useLaunchesPastQuery } from "../generated/graphql";
const Home: React.FC = () => {
  const { data, loading } = useLaunchesPastQuery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SpaceX</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <p>Carregando ...</p>
        ) : (
          data &&
          data.launchesPast!.map(launch => (
            <IonCard key={launch.id as string}>
              <IonCardHeader>
                <IonCardTitle>{launch.mission_name}</IonCardTitle>
              </IonCardHeader>
              <IonImg src={launch.links.flickr_images[0]}></IonImg>
              <IonCardContent>{launch.rocket.rocket_name}</IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
