import { SearchDetailsWrapper, BookButton } from "../SearchDetails/elements";
import SearchDetail from "./SearchDetail";

const SearchDetails = () => {
  return (
    <SearchDetailsWrapper>
      <SearchDetail
        label="From / to"
        value="3 Jan 2020 - 28 Feb 2020"
        showArrow
      />
      <SearchDetail label="For" value="2 Guest" showArrow />
      <SearchDetail label="£ Per night" value="345" />
      <SearchDetail label="£ Total for 54 nights" value="18,630" />
      <BookButton>INSTANT BOOKING</BookButton>
    </SearchDetailsWrapper>
  );
};

export default SearchDetails;
