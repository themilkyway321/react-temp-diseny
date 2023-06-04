import { useQuery } from "react-query";
import { useLocation, useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { fetchChacterInfo } from "../api";

const Containter = styled.div`
@import url('https://fonts.cdnfonts.com/css/new-walt-disney-font');
font-family: 'New Walt Disney Font', sans-serif;
padding:0px 20px;
margin: 0 auto;
position: relative;
height: 100vh;

`;

const Loader = styled.span`
display: inline-block;
  font-size: 40px;
  margin: 10px 20px;
`;

const Info = styled.div`
max-width: 500px;
position: absolute;
left: 50%;
transform: translateX(-50%);
margin-top:100px;
text-align: center;
p{
  font-size: 25px;
  margin: 20px 0;
 }
img {
      width: 200px;
      height: 200px;
      border-radius:50%;
    }
h2{
  font-size: 35px;
  margin: 20px 0;
}
`;

const InfoWrapper = styled.div`
span{
  display: inline-block;
  font-size: 20px;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  margin: 5px;
  padding: 0 10px;
  text-align: center;
}
`;

interface Params {
  id:string;
};
interface RouteState {
  name: string;
 
};
interface ICharacInfo {
  id:string;
  films:string[];
  name:string;
  imageUrl:string;
  sourceUrl:string;
};
function Character(){
  const { id }= useParams<Params>();
  const { state } = useLocation<RouteState>();
  const {isLoading, data} = useQuery<ICharacInfo>(id, ()=>fetchChacterInfo(id));
  return(
    <Containter>
      {isLoading? <Loader>loading..</Loader> : (
        <Info>
          <p><Link to={`/`}>←</Link></p>
      <img src={`${data?.imageUrl}`} />
      {state?.name? (<h2>{state.name}'s Films</h2>) : <Loader>loading..</Loader>}
      <InfoWrapper>{data?.films.map((v)=>(
          <span key={v}>{v}</span>
        ))}
      </InfoWrapper>
      </Info>
      )}
      
      </Containter>
  )
}

export default Character;