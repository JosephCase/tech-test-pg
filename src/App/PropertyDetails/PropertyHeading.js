import {
  PropertyHeadingWrapper,
  PropertyName,
  PropertyDetails,
  Detail,
  PropertyLogistics,
  Logistic,
} from "./elements";

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
      <Logistic>Notting Hill, London</Logistic>
      <Logistic>Walk 6 mins (Westbourne Park Station)</Logistic>
      <Logistic>Stairs</Logistic>
    </PropertyLogistics>
  </PropertyHeadingWrapper>
);

export default PropertyHeading;
