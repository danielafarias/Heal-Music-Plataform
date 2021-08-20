// 1ª View
import React from "react";
import heal from '../images/heal.svg';
import heart from '../images/heart.svg';
import github from '../images/github.svg';
import Searchbar from './Searchbar';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <header>
                <img src={heal} alt='Logo da plataforma Heal'/>
                <img src={heart} alt='Coração de acesso aos favoritos'/>
                <img src={github} alt='Logo do Github'/>
            </header>
            <main>
                <Searchbar/>
            </main>
        </div>
    );
}