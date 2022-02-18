package com.niki.pers_lib.rest.book;

import com.niki.pers_lib.services.book.BookFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/book-files")
public class BookFileRest {


    @Autowired
    BookFileService service;

    @PostMapping("/addFile")
    public void uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("fileName") String fileName) throws IOException {
        service.fileUpload(file, fileName);
    }

}
