// 1ª View
import React from "react";
import heal from '../images/heal.svg';
import pinkHeart from '../images/pinkHeart.svg';
import github from '../images/github.svg';
import Searchbar from './Searchbar';
import TopGlobalList from './TopGlobalList';
import { 
    FixHeart, 
    Github, 
    Logo, 
    Header, 
    ImgDiv, 
    MenuDiv, 
    TextMenu,
    Subtitle } from "./Styles";

export default function Dashboard() {
    return (
        <>
            <Header className="dashboard">
                <ImgDiv>
                    <MenuDiv>
                        <Logo src={heal} alt='Logo da plataforma Heal'/>
                        <Searchbar/>
                        <TextMenu>
                            or 
                        </TextMenu>
                        <TextMenu>
                            access your love pills in the 
                        </TextMenu>
                        <TextMenu>
                            upper right corner ↗
                        </TextMenu>
                    </MenuDiv>
                    <MenuDiv>
                        <FixHeart className='heart' src={pinkHeart} alt='Coração de acesso aos favoritos'/>
                        <Github src={github} alt='Logo do Github'/>
                    </MenuDiv>
                </ImgDiv> 
            </Header>
            <main>
                <Subtitle white>Top Tracks</Subtitle>
                <TopGlobalList />
            </main>
        </>
    );
}