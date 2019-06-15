import aerobie from "./images/aerobie.png";
import agl from "./images/agl.png";
import aquaFlight from "./images/aquaflight.png";
import axiom from "./images/axiom.png";
import ching from "./images/ching.png";
import daredevil from "./images/daredevil.png";
import dga from "./images/dga.png";
import discMania from "./images/discmania.png";
import discraft from "./images/discraft.png";
import dynamic from "./images/dynamic.png";
import element from "./images/element.png";
import fullTurn from "./images/fullturn.png";
import gateway from "./images/gateway.png";
import galaxy from "./images/galaxy.png";
import handCandy from "./images/handCandy.png";
import hyzerBomb from "./images/hyzerbomb.png";
import infinite from "./images/infinite.png";
import innova from "./images/innova.png";
import kastaplast from "./images/kastaplast.png";
import latitude from "./images/latitude.png";
import legacy from "./images/legacy.png";
import lightning from "./images/lightning.png";
import millennium from "./images/millennium.png";
import mvp from "./images/mvp.png";
import niteIze from "./images/niteIze.png";
import ozone from "./images/ozone.png";
import prodigy from "./images/prodigy.png";
import prodiscus from "./images/prodiscus.png";
import reptilian from "./images/reptilian.png";
import rpm from "./images/rpm.png";
import salient from "./images/salient.png";
import streamline from "./images/streamline.png";
import storm from "./images/storm.png";
import tobu from "./images/tobu.png";
import vibram from "./images/vibram.png";
import viking from "./images/viking.png";
import westside from "./images/westside.png";
import yikun from "./images/yikun.png";
import fourthCircle from "./images/4circle.png";
import discmaniaActive from "./images/discmaniaActive.png";
import discmaniaEvolution from "./images/discmaniaEvolution.png";

const getLogo = manufacturer => {
  switch (manufacturer) {
    case "DiscMania":
      return discMania;
    case "Discmania":
      return discMania;
    case "Discraft":
      return discraft;
    case "Dynamic Discs":
      return dynamic;
    case "Dynamic":
      return dynamic;
    case "Innova":
      return innova;
    case "Kastaplast":
      return kastaplast;
    case "Latitude 64":
      return latitude;
    case "Millennium":
      return millennium;
    case "MVP":
      return mvp;
    case "Prodigy":
      return prodigy;
    case "Vibram":
      return vibram;
    case "Westside Discs":
      return westside;
    case "Westside":
      return westside;
    case "Aerobie":
      return aerobie;
    case "Axiom":
      return axiom;
    case "Ching":
      return ching;
    case "Daredevil Discs":
      return daredevil;
    case "Daredevil":
      return daredevil;
    case "DGA":
      return dga;
    case "Element Discs":
      return element;
    case "Element":
      return element;
    case "Full Turn":
      return fullTurn;
    case "Gateway":
      return gateway;
    case "Hyzer Bomb":
      return hyzerBomb;
    case "Legacy Discs":
      return legacy;
    case "Legacy":
      return legacy;
    case "Lightning Golf Discs":
      return lightning;
    case "Lightning":
      return lightning;
    case "Nite Ize Innovation":
      return niteIze;
    case "Nite Ize":
      return niteIze;
    case "Prodiscus":
      return prodiscus;
    case "Reptilian Disc Golf":
      return reptilian;
    case "Reptilian":
      return reptilian;
    case "RPM Discs":
      return rpm;
    case "RPM":
      return rpm;
    case "Salient Discs":
      return salient;
    case "Salient":
      return salient;
    case "TOBU":
      return tobu;
    case "UB Hand Candy":
      return handCandy;
    case "Viking Discs":
      return viking;
    case "Viking":
      return viking;
    case "YiKun":
      return yikun;
    case "AquaFlight":
      return aquaFlight;
    case "Infinite Discs":
      return infinite;
    case "Infinite":
      return infinite;
    case "Above Ground Level":
      return agl;
    case "Ozone Discs":
      return ozone;
    case "Ozone":
      return ozone;
    case "Streamline Discs":
      return streamline;
    case "Streamline":
      return streamline;
    case "Storm Disc Golf":
      return storm;
    case "Storm":
      return storm;
    case "Galaxy Disc Golf":
      return galaxy;
    case "Galaxy":
      return galaxy;
    case "Fourth Circle":
      return fourthCircle;
    case "Discmania Active":
      return discmaniaActive;
    case "Discmania Evolution":
      return discmaniaEvolution;
    default:
      return null;
  }
};

export default getLogo;
