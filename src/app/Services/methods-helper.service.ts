import { Injectable } from '@angular/core';

@Injectable()
export class MethodsHelperService {

  constructor() { }

    printArraysOfArray(arrays: Array<Array<number>>){
        let str = "";
        arrays.forEach((numbers: Array<number>) => {
            numbers.forEach((val: number) => {
                str += val + " ";
            });
            console.log(str);
            str = "";
        });
    }

    printArrayOfSet(arrays: Array<Set<number>>){
        let str = "";
        arrays.forEach((numbers: Set<number>) => {
            numbers.forEach((val: number) => {
                str += val + " ";
            });
            console.log(str);
            str = "";
        });
    }

}
