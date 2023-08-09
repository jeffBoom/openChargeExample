import { ocmNullable } from "./ocmNullable";

export interface IOcmStatusType {
    id: number,
    isOperational: ocmNullable<boolean>,
    isUserSelectable: ocmNullable<boolean>,
    title: string,
}