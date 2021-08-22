import { 
    Search, 
    SearchDiv, 
    SearchIcon } from "./Styles";
import search from "../images/search.svg"

export default function Searchbar() {
    return (
        <SearchDiv>
            <Search type='text' placeholder='Search here'/>
            <SearchIcon src={search}/>
        </SearchDiv>
    );
}