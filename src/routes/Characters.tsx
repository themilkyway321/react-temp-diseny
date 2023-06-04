import { useQuery } from "react-query";
import { fetchCharacters } from "../api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
@import url('https://fonts.cdnfonts.com/css/new-walt-disney-font');
font-family: 'New Walt Disney Font', sans-serif;
padding: 0 20px;
margin: 0 auto;
width:1400px;
`;
const Loader = styled.div`
margin: 0 auto;
font-size: 40px;
  
`;
const Header = styled.header`
height: 10vh;
text-align: center;
padding-top:20px;
margin: 40px 0;
`;

const Title = styled.h2`
font-size: 50px;
`;
const CharactersList = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
text-align:center;
`;

const CharacterName = styled.div` 
  a{
    border-radius: 10px;
     padding: 10px 0;
    margin: 10px;
    display: block;
    transition: 0.5s;
    width: 400px;
     height: 250px;
     &:hover{
        background-color: #eee;
        p{
          color: #000;
        }
      }
    img {
      width: 200px;
      height: 200px;
      border-radius:50%;
    }
    p{
      padding-top: 10px;
      font-size: 25px;
      transition: 0.5s;
    }
}
`;

  


interface IChac{
  id:number,
  name:string,
  imageUrl:string,
};

function Characters(){
  const {isLoading, data} = useQuery<IChac[]>("allCharacters", fetchCharacters)
  return(
    <Container>
      <Header>
        <Title>Diseny Charcters</Title>
        </Header>
      {isLoading? <Loader>loading..</Loader> :(
        <CharactersList>
          {data?.slice(0,48).map((item)=>
            <CharacterName key={item.id}>
            <Link to={{
              pathname:`/character/${item.id}`,
              state: {name: item.name}
              }}>
                <img src={`${item.imageUrl}`} />
            <p>{item.name}</p>
            </Link>
            </CharacterName>
          )}
        
        </CharactersList>
      )}

    </Container>
      )
}

export default Characters;