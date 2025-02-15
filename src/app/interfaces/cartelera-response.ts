export interface CarteleraResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
    dates: Dates;
}

export interface Dates {
    maximum: string;
    minimum: string;    
}

export interface Movie {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    origanal_language: OriginalLanguage;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: Date;
}

export enum OriginalLanguage {
    Es = "es",
    En = "en",
    Ko = "ko",
    Ja = "ja",
    Fr = "fr",
    Zh = "zh",
    Ru = "ru",
    De = "de",
    It = "it",
    Pt = "pt",
    Da = "da"
}