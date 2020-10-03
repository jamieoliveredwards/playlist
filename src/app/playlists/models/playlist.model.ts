export interface IPlaylist {
    id: string;
    type: 'playlist';
    name: string;
    url: string;
    curator_name: string;
    artwork: string;
    favorite?: boolean;
}

export interface IPlaylistCollection {
    name: string;
    content: IPlaylist[];
}

export interface IPlaylistResponse {
    [key: string]: {
        name: string;
        content: IPlaylist[];
    };
}
