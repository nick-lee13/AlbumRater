package dev.albumrater.albumRater;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlbumService {

    @Autowired
    private AlbumRepository albumRepository;

    public List<Album> allAlbums(){
        return albumRepository.findAll();
    }

    public Optional<Album> singleAlbum(String SPid){
        return albumRepository.findAlbumBySPid(SPid);
    }
}
