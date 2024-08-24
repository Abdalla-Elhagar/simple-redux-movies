import { createStore } from "redux"
import { details } from "./reducer/details"


export const myStore = createStore(details)