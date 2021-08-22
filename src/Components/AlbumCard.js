import { 
    Card, 
    CardDiv, 
    CardInfo, 
    CardDescription, 
    Button } from "./Styles";
import daniavatar from "../images/dani-avatar.png";
import play from '../images/play.svg';
import pause from '../images/pause.svg';

export default function AlbumCard() {
    return (
        <Card url={daniavatar}>
            <CardInfo>
                <CardDiv>
                    <CardDescription>
                        Titulo 
                        <br/>
                        Autor
                        <br/>
                        0:30
                    </CardDescription>
                    <Button src={play}/>
                </CardDiv>
            </CardInfo>
        </Card>
    );
}