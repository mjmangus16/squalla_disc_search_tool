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

const getLogo = manufacturer => {
  if (manufacturer === "DiscMania") {
    return discMania;
  } else if (manufacturer === "Discraft") {
    return discraft;
  } else if (manufacturer === "Dynamic Discs") {
    return dynamic;
  } else if (manufacturer === "Innova") {
    return innova;
  } else if (manufacturer === "Kastaplast") {
    return kastaplast;
  } else if (manufacturer === "Latitude 64") {
    return latitude;
  } else if (manufacturer === "Millennium") {
    return millennium;
  } else if (manufacturer === "MVP") {
    return mvp;
  } else if (manufacturer === "Prodigy") {
    return prodigy;
  } else if (manufacturer === "Vibram") {
    return vibram;
  } else if (manufacturer === "Westside Discs") {
    return westside;
  } else if (manufacturer === "Aerobie") {
    return aerobie;
  } else if (manufacturer === "Axiom") {
    return axiom;
  } else if (manufacturer === "Ching") {
    return ching;
  } else if (manufacturer === "Daredevil Discs") {
    return daredevil;
  } else if (manufacturer === "DGA") {
    return dga;
  } else if (manufacturer === "Element Discs") {
    return element;
  } else if (manufacturer === "Full Turn") {
    return fullTurn;
  } else if (manufacturer === "Gateway") {
    return gateway;
  } else if (manufacturer === "Hyzer Bomb") {
    return hyzerBomb;
  } else if (manufacturer === "Legacy Discs") {
    return legacy;
  } else if (manufacturer === "Lightning Golf Discs") {
    return lightning;
  } else if (manufacturer === "Nite Ize Innovation") {
    return niteIze;
  } else if (manufacturer === "Prodiscus") {
    return prodiscus;
  } else if (manufacturer === "Reptilian Disc Golf") {
    return reptilian;
  } else if (manufacturer === "RPM Discs") {
    return rpm;
  } else if (manufacturer === "Salient Discs") {
    return salient;
  } else if (manufacturer === "TOBU") {
    return tobu;
  } else if (manufacturer === "UB Hand Candy") {
    return handCandy;
  } else if (manufacturer === "Viking Discs") {
    return viking;
  } else if (manufacturer === "YiKun") {
    return yikun;
  } else if (manufacturer === "AquaFlight") {
    return aquaFlight;
  } else if (manufacturer === "Infinite Discs") {
    return infinite;
  } else if (manufacturer === "Above Ground Level") {
    return agl;
  } else if (manufacturer === "Ozone Discs") {
    return ozone;
  } else if (manufacturer === "Streamline Discs") {
    return streamline;
  } else if (manufacturer === "Storm Disc Golf") {
    return storm;
  } else if (manufacturer === "Galaxy Disc Golf") {
    return galaxy;
  }
};

export default getLogo;
