interface Song{
    play(): any;
}

class LeafPlaylist implements Song{
    musicalNotes: any;
    constructor(soundBytes: any){
        this.musicalNotes = soundBytes;
    }
    play(){
        return this.musicalNotes;
    }
}

class CompositePlayList implements Song{
    allSongs: Song[];
    constructor(songs: Song[]){
        this.allSongs = songs;
    }

    play(){
        return this.allSongs.map(song => song.play());
    }
}