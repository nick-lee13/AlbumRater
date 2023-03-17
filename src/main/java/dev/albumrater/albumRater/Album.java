package dev.albumrater.albumRater;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.Data;

@Document(collection = "albums")
@Data
public class Album {
    @Id
    private ObjectId id;
    private String name;
    private String artist;
    private String label;
    private String release_date;
    private int total_tracks;
    private List<String> tracks;
    private String external_url;
    private List<String> genres;
    private List<String> images;
    @DocumentReference
    private List<Review> reviewIds;
}
