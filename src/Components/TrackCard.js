import { 
    Card, 
    CardDiv, 
    CardInfo, 
    FixHeart, 
    FixDeezer, 
    CardDescription, 
    Button } from "./Styles";
import daniavatar from "../images/dani-avatar.png";
import pinkHeart from '../images/pinkHeart.svg';
import blueHeart from '../images/blueHeart.svg';
import deezer from '../images/deezer.svg';
import play from '../images/play.svg';
import pause from '../images/pause.svg';

export default function TrackCard(props) {
    return (
        <Card url={props.AlbumImage}>
            <CardInfo>
                <CardDiv>
                    <FixHeart src={blueHeart} alt='favoritos'/>
                    <FixDeezer src={deezer} alt='favoritos'/>
                </CardDiv>
                <CardDiv>
                    <CardDescription>
                        {props.TrackTitle} 
                    </CardDescription>

                    <CardDescription>
                        {props.TrackArtist} 
                    </CardDescription>

                    <CardDescription>
                        {props.TrackTime} 
                    </CardDescription>
                    <Button src={play}/>
                </CardDiv>
            </CardInfo>
        </Card>
    );
}