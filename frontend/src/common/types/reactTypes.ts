import { Dispatch, SetStateAction } from "react"

export type SetStateType<T> = Dispatch<SetStateAction<T>>
export type ClassNameType = string
export type ChildrenType = Readonly<React.ReactNode>