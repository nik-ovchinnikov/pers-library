package com.niki.pers_lib.rest.book.book_place;

import com.niki.pers_lib.services.book.BookService;
import com.niki.pers_lib.services.book.book_place.BookSubPlaceService;
import com.niki.pers_lib.services.book.book_type.BookSubTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book-subplace")
public class BookSubPlaceRest {
    @Autowired
    private BookSubPlaceService bookSubPlaceService;

    @Autowired
    private BookService bookService;

    @DeleteMapping("/deleteList")
    @ResponseBody
    public void deletePlace(
            @RequestParam String ids
    ) {
        String[] idsArray = ids.split("-");
        this.prepareBooksBeforeDelete(idsArray);
        this.bookSubPlaceService.delete(idsArray);
    }

    public void prepareBooksBeforeDelete(String[] idsArray) {
        for(String stringId : idsArray) {
            Long id = Long.parseLong(stringId);
            this.bookService.changeItemsIfDeleteSubPlace(id);
        }
    }
}
