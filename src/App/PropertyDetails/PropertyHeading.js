import {
  PropertyHeadingWrapper,
  PropertyName,
  PropertyDetails,
  Detail,
  PropertyLogistics,
  Logistic,
} from "./elements";

import { FiMapPin } from "react-icons/fi";
import { BiTrain } from "react-icons/bi";
import { GiStairs } from "react-icons/gi";

const PropertyHeading = () => (
  <PropertyHeadingWrapper>
    <PropertyName>Monsieur Didot</PropertyName>
    <PropertyDetails>
      <Detail>4 people</Detail>
      <Detail>2 bedrooms</Detail>
      <Detail>2 bathrooms</Detail>
      <Detail>Private terrasse</Detail>
      <Detail>Peaceful</Detail>
    </PropertyDetails>
    <PropertyLogistics>
      <Logistic>
        <FiMapPin />
        Notting Hill, London
      </Logistic>
      <Logistic>
        <BiTrain />
        Walk 6 mins (Westbourne Park Station)
      </Logistic>
      <Logistic>
        <GiStairs />
        Stairs
      </Logistic>
    </PropertyLogistics>
  </PropertyHeadingWrapper>
);

export default PropertyHeading;
