import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

export const products = useSelector((state: RootState) => state.products)

