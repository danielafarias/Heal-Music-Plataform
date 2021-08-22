import TrackCard from './TrackCard';
import { getTrackChart } from '../api/Api';
import React from 'react';

export default function TopGlobalList() {

    const [tracks, setTracks] = React.useState(undefined);

    if (!tracks) {
        getTrackChart().then((res) => setTracks(res));
    }

    return (
        <>
            {tracks.map(tracks => (
                <TrackCard key={tracks.id} TrackTitle={tracks.title} TrackArtist={tracks.artist.name} TrackTime={tracks.duration}/>
            ))}
        </>
    );
}