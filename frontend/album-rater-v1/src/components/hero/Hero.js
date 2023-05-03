import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({albums}) => {

    const navigate = useNavigate();

    function reviews(albumId){
        navigate(`/Reviews/${albumId}`);
    }

    return (
        <div className='album-carousel-container'>
            <Carousel>
                {
                    albums?.map((album) =>{
                        return(
                            <Paper key={album.SPid}>
                                <div className = 'album-card-container'>
                                    <div className="album-card" style={{"--img": `url("${album.image}")`}}>
                                        <div className="album-detail">
                                            <div className="album-cover">
                                                <img src={album.image} alt="" />
                                            </div>
                                            <div className="album-title">
                                                <h4>{album.name}</h4>
                                            </div>
                                            <div className="album-buttons-container">
                                                <Link to={`/Trailer/${album.youtube_url}`}>
                                                <div className="play-button-icon-container">
                                                    <FontAwesomeIcon className="play-button-icon"
                                                        icon = {faCirclePlay}
                                                    />
                                                </div>
                                                </Link>

                                                <div className='album-review-button-container'>
                                                    <Button variant ="info" onClick={() => reviews(album.spid)}>Reviews</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero