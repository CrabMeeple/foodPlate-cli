export interface Food {
    id: number;
    description: string;
    tags: Array<string>;
    manufacturer: string;
    group: string;
    nutrients: Array<object>;
    portions: Array<object>;
}
