// 2ª View
import React from 'react';
import { 
    LovePill, 
    Comeback, 
    Subtitle, 
    FavoriteDescription, 
    FavoriteDiv } from './Styles';
import lovepill from '../images/lovepill.svg';
import back from '../images/back.svg';
import TopGlobalList from './TopGlobalList';

export default function Favorites() {
    return (
        <div>
            <FavoriteDiv>
                <Comeback src={back} alt='Seta para voltar à página anterior'/>

                <FavoriteDescription>
                    To remove a favorite song just click on heart
                </FavoriteDescription>
            </FavoriteDiv>

            <FavoriteDiv>
                <LovePill src={lovepill} alt='Frasco de comprimidos em formato de coração'/>

                <Subtitle white>
                    Take your
                    <br />
                    Love pills
                    <br />
                    ...
                    <br />
                    Music 
                    <br />
                    Heals
                </Subtitle>
            </FavoriteDiv>

            <Subtitle>
                Your Favorites
            </Subtitle>

            <TopGlobalList />
        </div>
    );
}