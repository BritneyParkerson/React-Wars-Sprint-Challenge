import React from 'react';


const Card = styled.div`
background: #4A646C;
margin 1.5%;
padding: 2% 7%;
text-align: center;
width 15%;
border-radius: 5%;
font-size:24px;
font-weight:bold;
text-align: center;
`;

const CharacterName = styled.h2`
text-align: center;
margin-bottom: 2%;
font-size:20px;
color: #9C7C38;
`;

const Stats = addstyle.h4`
font-size:20px;
`;



export default function Characters({props}) {
return (
    <Card>
    <CharacterName>{props.name}</CharacterName>
    <Stats>Born: {props.birthyear}</Stats>
    <Stats>Gender: {props.gender}</Stats>
    <Stats>Height: {props.height}</Stats>
    <Stats>Created: {props.created}</Stats>
    <Stats>Edited: {props.edited}</Stats>
    <Stats>Hair Color: {props.hair_color}</Stats>
    <Stats>Eye Color: {props.eye_color}</Stats>
    <Stats>Mass: {props.mass}</Stats>

    
    </Card>
)
}