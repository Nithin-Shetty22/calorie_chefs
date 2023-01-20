import styled from 'styled-components';
import {Container} from '../../Globalstyles';
import {Link} from 'react-router-dom';
import {SiGooglemaps} from 'react-icons/si';
import {FaPhone
} from 'react-icons/fa';
export const FooterSection = styled.section`
display: flex;
align-items: center;
flex-direction: column;
color: #fff;
background-color: #333;
padding: 5rem 0rem;
`;

export const FooterRow=styled.div`
display: flex;
@media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
}
`;
export const FooterContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;


${Container}
`;

export const FooterNewsletter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const FooterNewsletterTitle = styled.h2`
font-size: 24px;
margin-bottom: 1rem;
text-align: center;
`;

export const FooterNewsletterText = styled.h3`
font-size: 20px;
font-weight: 400;
text-align: center;
`;

export const FooterLabel = styled.label`
display: none;
`;

export const FooterNewsletterForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;

@media only screen and (max-width: 900px) {
    flex-direction: column;

}
`;

export const FooterNewsletterInput = styled.input`
padding: 10px 25px;
background-color: #fff;
outline: none;
border: none;
border: 1px solid #333;
border-radius: 3px;
border-radius: 2px;
font-size: 1.6rem;
margin-right: 10px;

&::placeholder {
    color: #333;
}
@media only screen and (max-width: 900px) {
    padding: 15px 25px;
    margin-bottom: 3rem;
    font-size: 2rem;
    
}
`;

export const FooterBtn = styled.button`
background-color: #fff;
color: #333;
padding: 1rem 2rem;
border-radius: 3px;
outline: none;
border: none;
font-size: 1.8rem;
transition: all .5s ease;
&:hover{
    background-color: #E38B06;
    color: #fff;
    transform: translateY(-.5rem) scale(1.02);
}
&:active{
    transform: translateY(.5rem);
}
`;

export const FooterLinkContainer = styled.div`
margin-top: 5rem;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;
align-items: center;
&:not(:last-child) {
    margin-right: 10rem;
}
@media only screen and (max-width: 900px) {
&:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4rem;
}
}
@media only screen and (max-width:700px){

}
`;

export const FooterLinks = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
&:not(:last-child) {
    margin-right: 10rem;
}
`;

export const FooterLinkTitle = styled.h3`
font-size: 24px;
`;

export const FooterLink = styled(Link)`
text-decoration: none;
color: #fff;
margin-bottom: 1rem;
transition: all .4s ease;

&:hover {
    color: #E38B06;
}
`;

export const FooterCopyRight = styled(Link)`
text-decoration: none;
outline: none;
color: #fff;
margin-top: 3rem;

&:hover {
    color: #E38B06;
}
`;

export const FooterHeading=styled.h1`
margin-bottom: 1rem;
text-align: center;
color: #fff
`;

export const BackgroundLogo = styled.div`
background: #FFFFFF;
align-items: center;
border-radius: 50%;
margin-right:5px;
// height:25%;
`;
export const Img = styled.img`
height: 10rem;
transition: all .5s ease;

&:hover {
    transform: scale(1.06) rotate(360deg);
}

@media only screen and (max-width: 1000px){
    height: 9rem;
}

@media only screen and (max-width: 400px){
    height:8rem;
}
`;

export const Footerleft=styled.div`
display: flex;
flex-direction: column;
// align-items: center;
padding: 0rem 0rem;
`;

export const MapImageContainer=styled.div`
display: flex;
// align-items: center;

`;

export const MapIcon=styled(SiGooglemaps)`
color:FF0000;
font-size: 6rem;`;

export const NameSpan=styled.span`
font-size: 2.5rem;
font-weight: 800;
`;

export const Navigationtag=styled.a`
text-decoration: none;
outline: none;
color: #fff;
margin-top: 3rem;
font-size: 2.5rem;
font-weight: 400;
&:hover {
    color: #E38B06;
}`;

export const FooterRight=styled.div`
display: flex;
flex-direction: column;
`;

export const PhoneIcon1 = styled(FaPhone)`
color: #fff;
`;

export const SocialIcons=styled.img`
height:4rem;
width:4rem;
`;