import { useEffect,useContext } from "react";
import { useLocation } from "react-router-dom";
import { Statecontext } from "./CointoviewContext";

export default function Getlocation() {
const routePath = useLocation();
const [currentlocale,setcurrentlocale] = useContext(Statecontext).currentlocale;
const onTop = () => {
	setcurrentlocale(routePath.pathname);
}
useEffect(() => {
	onTop()
}, [routePath]);

return null;
}