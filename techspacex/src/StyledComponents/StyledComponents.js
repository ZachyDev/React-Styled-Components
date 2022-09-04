import styled from "styled-components";
import HomeImage from '../assets/home-img.jpg';
const Title = styled.h1`
    color: #FFB600;
    font-size: 25px;
    font-family: 'Fira Sans', sans-serif;
    font-family: 'Fira Sans Condensed', sans-serif;
`;

const NavbarWrapper = styled.div`
    background: #233746;
    padding: 25px;
    max-width:100%;
`;

const NavbarMain = styled.nav`
    float: right;
    font-size: 16px;
`;

const NavbarUl = styled.ul`
    list-style-type:none;
    color: #FFB600;
    font-size: 18px;
    font-family: 'Fira Sans', sans-serif;
    font-family: 'Fira Sans Condensed', sans-serif;
`;

const NavbarLi = styled.li`
    margin-top: -60px;
    display: flex;
    flex-direction: row;
`;

const HomeSection = styled.div`
    background: url(${HomeImage});
    max-width: 100%;
    height: 70vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-overlay: #000;
`;

const HomeSectionTitle = styled.h1`
    font-size: 60px;
    position: absolute;
    top: 40%;
    left: 10%;
    color: #233746;
    font-weight: 900;
`;
const HomeButton = styled.button`
    background: #FFB600;
    padding: 15px;
    color: #233746;
    width: 150px;
    border: 1px solid #FFB600;
    border-radius: 7px;
    position: absolute;
    font-weight: 700;
    font-size: 16px;
    font-family: arial;
    top: 130%;
    left: 0;
`;

const Button = styled.button`
    background: ${props => props.primary ? '#FFB600' : 'white'};
    padding: 15px;
    color: #233746;
    width: 130px;
    border: 1px solid #FFB600;
    border-radius: 7px;
    margin: 20px;
`;


export { Title, NavbarWrapper, NavbarMain, NavbarUl, NavbarLi, HomeSection, HomeSectionTitle, HomeButton, Button } 

    