package org.sceylan.backend.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PhotoRepository {

    public static final String DIRECTORY = "D://Medya//Zeynep//favoriler";//"src/main/photos";

    public List<String> getAllImage() {
        File folder = new File(DIRECTORY);
        File[] files = folder.listFiles();
        List<String> photos = new ArrayList<>();
        if (files != null) {

            for (var file : files) {
                if (isImage(file.getName()) && file.isFile())
                    photos.add(file.getName());
            }            
        }
        return photos;
    }
    public String getPhoto(String name)
    {
        File folder = new File(DIRECTORY);
        File[] files = folder.listFiles();
        
        if (files != null) {

            for (var file : files) {
                if (file.getName().contains(name) && isImage(file.getName()) && file.isFile())
                    return file.getName();
            }            
        }
        return "";
    }

    private boolean isImage(String imageName) {
        String[] extensions = { "jpg", "jpeg", "png", "gif" };
        for (String ext : extensions) {
            if (imageName.toLowerCase().endsWith(ext))
                return true;
        }
        return false;
    }

}
