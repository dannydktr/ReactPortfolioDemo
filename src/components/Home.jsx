import React from "react";

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { NavBar } from './NavBar';
import { HomeWrapper, MainContent, Greeting, Hobbies, SocialLinks, Avatar} from './HomeStyledComponents';

const SocialLink = (props) => (
    <a target="_blank" rel="noopener noreferrer" href={props.url} >
        {props.children}
    </a>
)

const funFacts = [
    'Cool Dude',
    'Alive',
    'Meth Cooker',
    'Banned from 20 different countries'
]

const funFactsBuilder = (length = 3) => {
    const facts = funFacts
    .map(fact => ({fact, randPos: Math.random()}))
    .sort((a, b) => a.randPos - b.randPos)
    .map(factObject => factObject.fact)
    .slice(0, length)
    .join(' | ')

    return facts.toString();
}


export const Home = () => (
    <HomeWrapper>
        <NavBar></NavBar>
        <MainContent>
            <Avatar picture='images/mark-color.jpg'></Avatar>
            <Greeting>Sup, I'm Mark</Greeting>
            <Hobbies> {funFactsBuilder()} </Hobbies>
            <SocialLinks>
                <SocialLink url="https://www.linkedin.com/in/mark-glose">
                    <LinkedInIcon style={{fontSize:40}}></LinkedInIcon>
                </SocialLink>
                <SocialLink url="https://www.instagram.com/phocisticks">
                    <InstagramIcon style={{fontSize:40}} ></InstagramIcon>
                </SocialLink>
            </SocialLinks>
        </MainContent>
    </HomeWrapper>
);