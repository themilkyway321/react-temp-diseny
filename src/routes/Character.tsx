import { useLocation, useParams } from "react-router-dom";

interface Params {
  id:string;
};
interface RouteState {
  name: string;
};
function Character(){
  const { id }= useParams<Params>();
  const { state } = useLocation<RouteState>();
  return(
    <div>
      {state?.name? state.name : "loading..."}
      Character</div>
  )
}

export default Character;