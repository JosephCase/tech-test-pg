import { SearchDetailWrapper, DetailLabel, DetailArrow } from "./elements";

const SearchDetail = ({ label, value, showArrow }) => {
  return (
    <SearchDetailWrapper clickable={showArrow}>
      <div>
        <DetailLabel>{label}</DetailLabel>
        <p>{value}</p>
      </div>
      {showArrow && <DetailArrow>v</DetailArrow>}
    </SearchDetailWrapper>
  );
};

export default SearchDetail;
