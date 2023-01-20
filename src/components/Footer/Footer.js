import {
    FooterSection,
    FooterContainer,
    FooterNewsletter,
    FooterNewsletterTitle,
    FooterNewsletterText,
    FooterNewsletterForm,
    FooterNewsletterInput,
    FooterBtn,
    FooterCopyRight,
    FooterLabel,
    FooterHeading,
    FooterRow,
    Img,
    BackgroundLogo,
    Footerleft,
    MapImageContainer,
    MapIcon,
    NameSpan,
    Navigationtag,
    PhoneIcon1,
    SocialIcons
} from './Footer.styles';
import Logo from '../../images/caloriechef.png';
import Youtube from '../../images/youtube.png' ;
import Instagram from '../../images/insta.png';
import Facebook from '../../images/fb.png';
import Twitter from '../../images/twitter.png';


function Footer() {
    return (
        <div id='Footer'>
            <FooterSection>
            <FooterHeading>CONTACT US</FooterHeading>
<FooterRow>
    <Footerleft>
        <MapImageContainer>
        <BackgroundLogo>
                        <Img src={Logo} alt="Logo"/></BackgroundLogo>
                           <NameSpan>Calorie Chef</NameSpan> 
        </MapImageContainer>
        <MapImageContainer>
            <Navigationtag href='tel://9972781328/'><PhoneIcon1/> 9972781328</Navigationtag>
        </MapImageContainer>
    </Footerleft>

                        
                        
<FooterContainer>
               
               <FooterNewsletter>
                   <FooterNewsletterTitle>Join our listing for execlusive discounts and new recipes</FooterNewsletterTitle>
                   <FooterNewsletterText>We create new recipes every week and cooking tips</FooterNewsletterText>
                   <FooterNewsletterForm>
                       <FooterLabel htmlFor="email">Email address</FooterLabel>
                      <FooterNewsletterInput name="email" id="email" type="email" placeholder="Email address" />
                      <FooterBtn>Submit</FooterBtn>
                   </FooterNewsletterForm>
               </FooterNewsletter>
              
              
           </FooterContainer>

               <Footerleft>
                <MapImageContainer>
                <MapIcon/><h4>We are located at<br/>
<bold>Hyderabad</bold><br/>
<Navigationtag href='mailto://caloriechef1@gmail.com/'>caloriechef1@gmail.com</Navigationtag>
</h4>
                </MapImageContainer>
                <br/>
                <MapImageContainer>
                    
                <a href='https://www.youtube.com/channel/UCRW2UX7zP-hv16YtRqS6N1g' target='_blank'><SocialIcons src={Youtube} alt="Logo"/></a><a href='https://www.instagram.com/caloriechef_/' target='_blank'><SocialIcons src={Instagram} alt="Logo"/></a><a href='https://www.facebook.com/profile.php?id=100089113028038' target='_blank'><SocialIcons src={Facebook} alt="Logo"/></a><a href='https://www.twitter.com/Caloriechef1' target='_blank'><SocialIcons src={Twitter} alt="Logo"/></a>
                </MapImageContainer>
               </Footerleft>
</FooterRow>
<FooterCopyRight> &copy; Copyright 2023, Calorie Chef.</FooterCopyRight> 
            </FooterSection>
            
        </div>
    )
}

export default Footer;
