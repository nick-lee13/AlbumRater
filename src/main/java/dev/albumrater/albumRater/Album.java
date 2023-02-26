package dev.albumrater.albumRater;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "albums")
public class Album {
    private ObjectId id;
    private String albumId;
}
