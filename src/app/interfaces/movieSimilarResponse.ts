export interface movieSimilarResponse {
    page:          number;
    results:       moviessimilar[];
    total_pages:   number;
    total_results: number;
}

export interface moviessimilar {
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       null | string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}
