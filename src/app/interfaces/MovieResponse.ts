export interface MovieResponse {
    adult?:                 boolean;
    backdrop_path?:         null;
    belongs_to_collection?: null;
    budget?:                number;
    genres?:                Genre[];
    homepage?:              string;
    id?:                    number;
    imdb_id?:               string;
    origin_country?:        any[];
    original_language?:     string;
    original_title?:        string;
    overview?:              string;
    popularity?:            number;
    poster_path:           string;
    production_companies?:  any[];
    production_countries?:  any[];
    release_date?:          Date;
    revenue?:               number;
    runtime?:               number;
    spoken_languages?:      SpokenLanguage[];
    status?:                string;
    tagline?:               string;
    title?:                 string;
    video?:                 boolean;
    vote_average?:          number;
    vote_count?:            number;
}

export interface Genre {
    id?:   number;
    name?: string;
}

export interface SpokenLanguage {
    english_name?: string;
    iso_639_1?:    string;
    name?:         string;
}
