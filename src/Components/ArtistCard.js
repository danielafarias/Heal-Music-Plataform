import { 
    Card, 
    CardDiv, 
    CardInfo, 
    CardDescription } from "./Styles";
import daniavatar from "../images/dani-avatar.png";

export default function ArtistCard() {
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
                </CardDiv>
            </CardInfo>
        </Card>
    );
}