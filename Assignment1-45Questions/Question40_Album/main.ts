const make_album = (artistName:string, albumTitle:string, numOfTracks:number=0)=> {

    if (numOfTracks !== 0) {
        let album = {
            "Artist Name": artistName ,
            "Album Title": albumTitle,
            "Number of Tracks": numOfTracks,
        }
        return album;

    } else {
        let album = {
            "Artist Name": artistName ,
            "Album Title": albumTitle,
        }
        return album;
    }
    
}

// calling the function three times with different parameters
console.log(make_album("artist1", "title1"));
console.log(make_album("artist2", "title2"));
console.log(make_album("artist3", "title3"));

// one time with number of tracks defined
console.log(make_album("artist4", "title4", 8));