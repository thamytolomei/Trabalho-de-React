import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
`;

export default GlobalStyles;

/*linda demais mas não funcionou pra todo mundo. Me recuso a excluíla. Por favor teste ela na Home pois é um colírio*/
export const Navbar = styled.nav`
width:100%;
background:rgba(11, 55, 69, 0.67);
height: 4rem;
display:flex;
align-items:center;
position: absolute;
z-index: 1;
`;

export const NavbarGood = styled.nav`
width:100%;
background:rgba(11, 55, 69, 0.67);
height: 4rem;
display:flex;
align-items:center;
`;

export const Logo = styled.h1`
color: white;
font-family: 'Trebuchet MS', sans-serif;
font-size: 1.5rem;
width: 180px;
margin-left: 40px;
`;
export const Nav = styled.nav`
display:flex;
justify-content:center;
align-items:center;
width:70%;
`;

export const EstiloBotao = styled.button`
padding: 0 50px;
height: 2rem;
color: white;
font-size: 17px;
margin-right: 20px;
background:transparent;
border: 2px solid #ff8c1a;
border-radius: 25px;
align-items:center;

&:hover{
    cursor:pointer;
}
`;

export const Botao = styled.button`
margin-bottom:20px;
height: 2.5rem;
width:70%;
color: white;
font-size: 17px;
background:rgba(209, 103, 16, 0.65);
border: 2px solid rgba(236, 156, 90, 0.65);
border-radius: 25px;
align-items:center;

&:hover{
    cursor:pointer;
}
`;
export const Botaozinho = styled.button`
margin-bottom:20px;
color: gray;
font-size: 14px;
background:white;
border: 2px solid rgba(236, 156, 90, 0.65);
border-radius: 7px;
align-items:center;

&:hover{
    cursor:pointer;
}
`;

export const Header = styled.div`
height: 80vh;
width: 100%;
opacity:0.8;
z-index: 0;
background-image: url('https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
`;

export const FormDiv = styled.div`
height: auto;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
background-color:rgba(11, 55, 69, 0.67);
font-family: 'Trebuchet MS', sans-serif;
color:white;
`;

export const Input = styled.input`
width: 60%;
height: 1.3rem; 
border-radius:8px; 
border-color:2px solid black; 
background-color:white; 
box-shadow:none;

&:focus{
    outline:none;
}
`;

/*O famoso fracasso*/
export const CardContainer = styled.div`
display: flex;
flex-direction:row;
flex-wrap:wrap;
width:100%;

li {
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:30%;
    list-style:none;
`;

export const Card = styled.div`
width: 20%;
height: 40%;
margin: 20px;
border: 1px solid gray;
border-radius: 5px;

&:hover{
    cursor: pointer;
    opacity: 0.8;
}
.nome{
    text-align:center;
    font-weight:bold;
    font-size: 20px;
}

p{
    margin-top:10px;
}
.bottom{
    background-color:lightgray;
    text-align:center;
}
`;

<GlobalStyles/>
