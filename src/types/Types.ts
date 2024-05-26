export type TPlanet ={
    name: string;
    overview: {
        content: string;
        source: string;
    };
    structure: {
        content: string;
        source: string;
    };
    geology: {
        content: string;
        source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
        planet: string;
        internal: string;
        geology: string;
    };
    planetSize?: {
        mobile: {
            width: string;
            height: string;
        };
        tablet: {
            width: string;
            height: string;
        };
        desktop: {
            width: string;
            height: string;
        };
    };
    color:string;
}