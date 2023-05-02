import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from "@mui/material";

const Hero = ({albums}) => {
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