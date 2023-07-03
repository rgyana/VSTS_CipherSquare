import { DataStatus } from "../enums/data-status.enum";

export interface TableType1Data {
    mobile?: number,
    name?: string,
    imageUrl?: string,
    pan?: string,
    mode?: string,
    creator?: string,
    sd?: string,
    partner?: string,
    asm?: string,
    distributor?: string,
    stage?: string,
    status?: DataStatus,
    created?: Date,
    modified?: Date,
    remarks?: string
}