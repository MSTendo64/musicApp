import { useState } from "react";
import tracksLists from "../../assets/tracksLists";
import style from "./MainPage.module.scss"
import Track from "../../components/Track/Track";
import { Input } from "@mui/material";

const runSearch = (query) => {
    if (!query){
        return tracksLists;
    }

    const lowerCaseQuery = query.toLowerCase();
    return tracksLists.filter(
      (track) => 
        track.title.toLocaleLowerCase().includes(lowerCaseQuery) || 
        track.artists.toLocaleLowerCase().includes(lowerCaseQuery)
    );
};

const MainPage = () => {
    const [tracks, setTracks] = useState(tracksLists)
    const handleChange = (event) => {
       const foundTracks = runSearch(event.target.value);
       setTracks(foundTracks);
    };
    return <div className={style.search}>
        <Input 
            className={style.input} 
            placeholder="Поиск трека" 
            onChange={handleChange}
        />
        <div className={style.list}>
            {tracks.map((track) => (
                <Track key={track.id} {...track} />
            ))}
        </div>
    </div>
};

export default MainPage;