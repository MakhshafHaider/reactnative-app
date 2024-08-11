import React, {useState, useEffect} from 'react';

// redux
import {useSelector} from 'react-redux';
// import {useDispatch} from 'react-redux';
// import OneSignal from 'react-native-onesignal';

// Stack
import ArtistMainStack from './ArtistMainStack';
import ConsumerMainStack from './ConsumerMainStack';
import ArtistAuthStack from './ArtistAuthStack';
import ConsumerAuthStack from './ConsumerAuthStack';
import InitStack from './InitStack';
import AuthStack from './ConsumerAuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Artist,
  ArtistGig,
  ArtistAddress,
  ArtistBookingDate,
  ArtistCreateGig,
  ArtistHome,
  ArtistInterests,
  ArtistNumberSignUp,
  ArtistOrderSummary,
  ArtistOrders,
  ArtistOtpSignUp,
  ArtistPasswordSignUp,
  ArtistProfile,
  ArtistSearch,
  ArtistStatus,
  ArtistUsernameSignUp,
  ArtistVerification,
  ArtistWelcome,
  ArtistKnownFor,
  ArtistOnBoarding,
  ArtistOnBoardingWelcome,
  ArtistGigMood,
  ArtistPublishGig
} from '../artist-screens';
import {
  ConsumerLanguage,
  ConsumerNotifications,
  ConsumerLocateKaynchi,
  ConsumerMapSearch,
  ConsumerSavedAddresses,
  ConsumerBookingSlots,
  ConsumerOrderSetting,
  ConsumerYourProfile,
  ConsumerInviteFriends,
  ConsumerProfileSaved,
  ConsumerPersonalDetails,
  ConsumerArtist,
  ConsumerAddEasyPaisa,
  ConsumerGigMainPage,
  ConsumerProfile,
  ConsumerPromoGig1,
  ConsumerPromoGig2,
  ConsumerPromoMainPage,
  ConsumerPromoMood,
  ConsumerPublishGig,
  ConsumerUpdateProfile,
  ConsumerVerification,
  ConsumerHomeSearch,
  ConsumerDisocver,
  ConsumerCharts,
  ConsumerTreatmentCharts,
  ConsumerGigDetailPage,
  ConsumerGigDetailHair,
  ConsumerGigGlowMakeup,
  ConsumerPromoDetailsPage,
  ConusmerCashPayment,
  ConsumerApplyPromoCode,
  ConsumerOrderConfirm,
  ConsumerOrderProcess,
  ConsumerAddToCart,
  ConsumerYourOrders,
  ConsumerHostingSpot,
  ConsumerHostingLocation,
  LocateKaynchi,
  ConsumerHelp,
  ConsumerAbout,
  ConumerReportBug,
  ConsumerShareIdea,
  ConsumerOrderCancellation,
  ConsumerBooking
} from '../consumer-screens';

// import AsyncStorage from "@react-native-async-storage/async-storage";

// OneSignal.addSubscriptionObserver(event => {
//   console.log("OneSignal: subscription changed event:", event);
//   console.log("OneSignal: subscription changed from userId:", event.from.userId);
//   console.log("OneSignal: subscription changed to userId:", event.to.userId);
//   console.log("OneSignal: subscription changed from pushToken:", event.from.pushToken);
//   console.log("OneSignal: subscription changed to pushToken:", event.to.pushToken);
//   console.log("OneSignal: subscription changed from isPushDisabled:", event.from.isPushDisabled);
//   console.log("OneSignal: subscription changed to isPushDisabled:", event.to.isPushDisabled);
//   console.log("OneSignal: subscription changed from isSubscribed:", event.from.isSubscribed);
//   console.log("OneSignal: subscription changed to isSubscribed:", event.to.isSubscribed);
// })

export default function Root() {
  //   OneSignal.addSubscriptionObserver(async (event) => {
  //     console.log("OneSignal: subscription changed to userId:", event.to.userId);
  //     if(event.to.userId){await AsyncStorage.setItem('oneSignalId', event.to.userId);}
  //   })

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 500);
  }, []);

  const auth = useSelector(state => state.auth);

  const accountCompleted = auth?.userDetails?.account_completed;
  const isArtist = auth?.userDetails?.isArtist === true;
  const isConsumer = auth?.userDetails?.isConsumer === true;

  // return auth?.token && accountCompleted && isArtist ? (
  //   <ArtistMainStack />
  // ) : auth?.token && accountCompleted && isConsumer ? (
  //   <ConsumerMainStack />
  // ) : !auth?.token && isArtist ? (
  //   <ArtistAuthStack />
  // ) : !auth?.token && isConsumer ? (
  //   <ConsumerAuthStack />
  // ) : (
  //   <InitStack />
  // );
  return auth?.token && isArtist ? (
    <ArtistMainStack />
  ) : auth?.token && isConsumer ? (
    <ConsumerMainStack />
  ) : !auth?.token && isArtist ? (
    <ArtistAuthStack />
  ) : !auth?.token && isConsumer ? (
     <ConsumerMainStack />
    
  ) : (
    <InitStack />
  );
}
