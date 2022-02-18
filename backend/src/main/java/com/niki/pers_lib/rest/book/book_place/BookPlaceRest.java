package com.niki.pers_lib.rest.book.book_place;

import com.niki.pers_lib.entities.book.book_place.BookPlace;
import com.niki.pers_lib.entities.book.book_place.BookSubPlace;
import com.niki.pers_lib.entities.book.book_type.BookType;
import com.niki.pers_lib.services.book.BookService;
import com.niki.pers_lib.services.book.book_place.BookPlaceService;
import com.niki.pers_lib.services.book.book_type.BookTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book-place")
public class BookPlaceRest {

    @Autowired
    private BookPlaceService bookPlaceService;

    @Autowired
    private BookService bookService;

    @PostMapping("/add")
    public void addType(@RequestBody BookPlace bookPlace) {
        if(bookPlace.getBookSubPlaceList() != null) {
            for(BookSubPlace subtype: bookPlace.getBookSubPlaceList()) {
                subtype.setBookPlace(bookPlace);
            }
        }
        bookPlaceService.create(bookPlace);
    }

    @GetMapping("/getAll")
    public List<BookPlace> getAllTypeList() {
        return bookPlaceService.getAll();
    }

    @GetMapping("/checkName")
    @ResponseBody
    public List<BookPlace> checkName(@RequestParam String name) {
        return bookPlaceService.checkName(name);
    }

    @DeleteMapping("/deleteList")
    @ResponseBody
    public void deletePlace(
            @RequestParam String names
    ) {
        String[] idsArray = names.split("-");

        this.prepareBooksBeforeDelete(idsArray);

        this.bookPlaceService.delete(idsArray);
    }

    @PutMapping("/update")
    public void updatePlace(@RequestBody BookPlace updatedBookPlace) {
        if(updatedBookPlace.getBookSubPlaceList() != null) {
            for(BookSubPlace st: updatedBookPlace.getBookSubPlaceList()) {
                st.setBookPlace(updatedBookPlace);
            }
        }
        this.bookPlaceService.updateBookPlace(updatedBookPlace);
    }

    public void prepareBooksBeforeDelete(String[] idsArray) {
        for(String stringId : idsArray) {
            Long id = Long.parseLong(stringId);
            this.bookService.changeItemsIfDeletePlace(id);

        }

    }
}
