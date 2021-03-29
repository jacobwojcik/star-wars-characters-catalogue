//interfaces

export interface ICharacter {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  }

export interface ICharacterState {
    characters: ICharacter[],
    isFetching: Boolean,
    isFetchingMore: Boolean,
  }


export interface IPageNumber {
    page :number,
    counter: number,
  };

export interface IMovie {
    title:string,
    episode_id:number,
    opening_crawl:string,
    director:string,
    producer:string,
    release_date:string,
    characters:string[],
    planets:string[],
    starships:string[]
    vehicles:string[],
    species:string[],
    created:string,
    editied:string,
    url:string,
  }

export interface IMoviesState {
    movies: IMovie[],
    isFetching: Boolean,
  }


//types


export type ListProps = {
    searchedCharacter:string,
}


export type CharProps = {
    name:string,
    gender:string,
    birth_year:string,
    mass:string,
    height:string,
    movies:string[], 
  }

export type SearchProps = {
    searchedCharacter:string,
    searchFor:Function,
  }