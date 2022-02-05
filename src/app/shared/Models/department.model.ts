import { ArtWork } from "./object.model";

export interface Department{
    departmentId: number,
    displayName:string,
    objectIds:number[],
    objects:ArtWork[]
}