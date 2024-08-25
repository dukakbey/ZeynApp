package org.sceylan.backend.controllers;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.sceylan.backend.service.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController

public class PhotoController {
    @Autowired    
    PhotoRepository reposiPhotoController;

    @GetMapping("/api/all")
    public List<String> getAllPhotos() {
        return reposiPhotoController.getAllImage();
    }
    @GetMapping("/api/{photoName}")
    public FileSystemResource getPhoto(@PathVariable String photoName) {
        return new FileSystemResource("D://Medya//Zeynep//favoriler//"+reposiPhotoController.getPhoto(photoName));
    }
    @GetMapping("/api/original/{photoName}")
    public ResponseEntity<FileSystemResource> getOriginalPhoto(@PathVariable String photoName) {
        FileSystemResource imgFile = new FileSystemResource("D://Medya//Zeynep//favoriler//"+reposiPhotoController.getPhoto(photoName));
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<>(imgFile,headers, HttpStatus.OK);
    }
    

}
