import styled from 'styled-components';

// Card styles

export const Card = styled.div`
    border-radius: 1rem;
    width: 200px;
    height: 200px;
    background-image: url(${props => props.url});
    margin: 1rem;
`;

export const CardDiv = styled.div`
    display: flex;
    justify-content: space-between;
    `;
export const CardInfo = styled.div`
    color: #E0E0E0;
    font-weight: bold;
    border-radius: 1rem;
    background: linear-gradient(to bottom, #064D50, transparent, #064D50)}; 
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    justify-content: space-between;
`;
    
export const CardDescription = styled.p`
    color: #E0E0E0;
    font-family: 'Roboto';
    margin: 0.5rem;
    text-shadow: 2px 2px 2px #424242;
`;


// Favorites styles

export const LovePill = styled.img`
    width: 200px;
`;

export const Comeback = styled.img`
    width: 40px;
`;

export const FavoriteDescription = styled.p`
    color: #3DADFF;
    font-family: 'Roboto';
    text-align: center;
    margin: 3rem;
`;

export const FavoriteDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
`;

// Images

export const SearchIcon = styled.img`
    width: 36px;
`;

export const FixHeart = styled.img`
    width: 42px;
    margin: 0.5rem;
`;

export const FixDeezer = styled.img`
    width: 42px;
    margin: 0.5rem;
    display: flex;
`;


export const Button = styled.img`
    width: 56px;
    margin: 0.5rem
`;


export const Github = styled.img`
    width: 42px;
    margin: 0.5rem
`;

export const Logo = styled.img`
    margin: 2rem;
`;


// Div

export const ImgDiv = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const MenuDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchDiv = styled.div`
    border-radius: 2rem;
    border: 5px solid #00C2CB;
    padding: 0.5rem;
    margin: 2rem;
    display: flex;
    &:hover {
        background-color: #E0E0E0;
    }
`;


// Section

export const Header = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`;


// Text

export const TextMenu = styled.p`
    color: #00C2CB;
    font-family: 'Roboto';
    text-align: center;
    margin: 1px;
`;

export const Subtitle = styled.h2`
    color: ${props => props.white ? '#E0E0E0' : '#00C2CB'};
    font-family: 'Roboto';
    margin: 1rem;
`;


// Others

export const Search = styled.input`
    border: none;
    background-color: transparent;
    color: #424242;
    font-weight: bold;
    &::placeholder {
        color: #00C2CB;
    }
    &:focus {
        color: #424242;
        outline: none;
    }
`;

