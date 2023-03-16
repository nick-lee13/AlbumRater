package dev.albumrater.albumRater;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "albums")
public class Album {
    private ObjectId id;
    private String albumId;
    private String title;
    private String releaseDate;
    private String spotifyLink;
    private String cover;
    private List<String> genres;
    private List<String> backdrops;
}
