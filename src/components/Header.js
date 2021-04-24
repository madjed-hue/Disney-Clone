import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { auth, provider } from '../firebase';
import {selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState}from '../features/user/userSlice';
import { useEffect } from 'react';

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user) => {
            if (user){
                setUser(user);
                history.push('/home')
            }
        })
    }, [username]);

    const handleAuth = ()=>{
        if (!username){
            auth.signInWithPopup(provider).then((result)=>{
                setUser(result.user);
            }).catch((error)=>{
                alert(error.message);
            });
        }else if(username){
            auth.signOut().then(()=>{
                dispatch(setSignOutState())
                history.push('/')
            }).catch((error)=>{
                alert(error.message);
            });
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            {
                !username?
                <Login onClick={handleAuth}>Login</Login>
                : 
                <> 
                
                
            
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </a>
                <a href="/home">
                    <img src="/images/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                </a>
                <a href="/home">
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/home">
                    <img src="/images/original-icon.svg" alt="ORIGINALS" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/home">
                    <img src="/images/movie-icon.svg" alt="MOVIES" />
                    <span>MOVIES</span>
                </a>
                <a href="/home">
                    <img src="/images/series-icon.svg" alt="SERIERS" />
                    <span>SERIERS</span>
                </a>
            </NavMenu>
            <SignOut>
                <UserImg src={userPhoto} alt="user photo" />
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
            </>
            }
        </Nav>
    )
}

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height:90px;
background-color:#090b13;
display:flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 12px;
z-index:3;
`;

const Logo = styled.a`
padding:0;
width: 100px;
margin-top: 2px;
max-height: 90px;
display: inline-block;
img{
    display:block;
    width: 100%;
}
`;

const NavMenu = styled.div`
display:flex;
align-items: center;
flex-flow: row nowrap;
height:100%;
justify-content: flex-end;
margin: 0;
padding: 0;
position:relative;
margin-right:auto;
margin-left:35px;
a{
    display:flex;
    align-items: center;
    padding: 0 12px;
    img{
        height:25px;
        min-width:25px;
        width:25px;
        z-index:auto;
    }
    span{
        color:rgb(249,249,249);
        font-size:16px;
        letter-spacing: 1.42px;
        line-height:1.08;
        padding: 2px 0;
        white-space: nowrap;
        position: relative;
    
    &:before{
        content: "";
        background-color:rgb(249,249,249);
        border-radius: 0 0 4px 4px;
        bottom:-6px;
        height: 2px;
        left: 0px;
        opacity:0;
        position: absolute;
        transform-origin: left center;
        right:0;
        transform: scaleX(0);
        transition: All 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility:hidden;
        width: auto;
        }
    }
    &:hover{
        span:before{
            transform: scaleX(1);
            visibility:visible;
            opacity:1 !important;
        }
    }
}
@media (max-width:768px){
    display:none;
}
`;

const Login = styled.a`
    background-color: rgb(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing:1.7px;
    border: 1px solid #9f9f9f;
    border-radius:4px;
    font-size:16px;
    transition: All .2s ease-out;
    cursor:pointer;
    &:hover{
        background-color:#9f9f9f;
        color: #000;
        border-color:transparent;
    }
`;

const UserImg = styled.img`
height: 100%;
`;

const DropDown = styled.div`
position: absolute;
top: 62px;
right:0px;
background-color: rgb(19,19,19);
border: 1px solid rgb(151,151,151,0.35);
border-radius: 4px;
box-shadow: (0 0 0/50%) 0px 0px 18px 0px;
padding:10px;
font-size:14px;
letter-spacing: 3px;
width:120px;
opacity:0;
text-align:center;
`;

const SignOut = styled.div`
position:relative;
width:60px;
height:60px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;

${UserImg}{
    border-radius:50%;
    width: 100%;
    height:100%;
}

&:hover{
    ${DropDown}{
        opacity:1;
        transition-duration:0.8s;
    }
}
`;

export default Header;