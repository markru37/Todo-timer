export type TypeTodo = {
    id: string;
    title: string;
    complete: string;
}

export interface TodoSliceState {
    todo: TypeTodo[];
    addValue: string;
    flag: boolean;
    status: 'loading' | 'success' | 'error';
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'

}