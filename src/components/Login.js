import styled from 'styled-components';

const Login = (props) => {
    return(
    <Container>
        <Content>
            <CTA>
                <CTAlogoOne src="/images/cta-logo-one.svg" alt="logo one"/>
                <Signup>Get All There</Signup>
                <Discription>Access Disney + on your devices: TV, computer, tablet, phone, game console and more. Enjoy 4 streams to watch on 4 screens simultaneously. Create up to 7 profiles for everyone to have a personalized experience.</Discription>
                <CTAlogoTwo src="/images/cta-logo-two.png" alt="logo two"/>
            </CTA>
            <BackImg />
        </Content>
    </Container>
    )
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
`;

const Content = styled.div`
margin-butoom: 10px;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
padding: 80px 40px;
height:100%;
`;

const BackImg = styled.div`
background-position:top ;
background-repeat: no-repeat;
background-size: cover;
background-image: url("/images/login-background.jpg");
z-index:-1;
height: 100%;
position:absolute;
top:0;
left: 0;
right: 0;
`;

const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction:column;
`;

const CTAlogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height:1px;
display: block;
width: 100%;
`;

const Signup = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-butoom:12px;
width: 100%;
font-size: 22px;
letter-spacing: 1.5px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius:5px;
cursor: pointer;
&:hover{
    background-color:#0483ee
}
`;

const Discription = styled.p`
color: #f9f9f9;
line-height:1.6;
letter-spacing:1.5px;
`;

const CTAlogoTwo = styled.img`
margin-bottom: 20px;
max-width: 600px;
min-height:1px;
display: inline-block;
width: 100%;
vertical-align: bottom;
`

export default Login;