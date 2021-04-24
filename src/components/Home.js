/* eslint-disable default-case */
import styled from 'styled-components';
import ImgSlider from './ImgSlider.js';
import Viewers from './Viewers.js';
import Recommends from './Recommends.js';
import NewDisney from './NewDisney.js';
import Originals from './Originals.js';
import Trending from './Trending.js';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
import {setMovies} from '../features/movie/movieSlice';
import {selectUserName} from '../features/user/userSlice';


const Home = (props) => {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                switch(doc.data().type){
                    case 'recommend':
                        recommends = [...recommends, {id: doc.id, ...doc.data()}];
                    break;
                    case 'new':
                        newDisneys= [...newDisneys, {id: doc.id, ...doc.data()}];
                    break;
                    case 'original':
                        originals = [...originals, {id: doc.id, ...doc.data()}];
                    break;
                    case 'trending':
                        trending = [...trending, {id: doc.id, ...doc.data()}];
                    break;
                    
                }
            });
        
        dispatch(setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original : originals,
            trending : trending,
        })
        );
    });
    },[username]);

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <Originals/>
            <Trending/>
            <NewDisney/>
        </Container>
    )
}

const Container = styled.main`
position: relative;
min-height:calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 90px;
padding: 0 calc(3.5vw + 5px);
&:after {
    background:url('/images/home-background.png') center center / cover no-repeat fixed;
    content:'';
    position: absolute;
    inset:0px;
    opacity:1;
    z-index:-1;

}
`;

export default Home;