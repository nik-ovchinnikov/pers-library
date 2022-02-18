package com.niki.pers_lib.rest.book.book_type;

import com.niki.pers_lib.services.book.BookService;
import com.niki.pers_lib.services.book.book_type.BookSubTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/subtype")
public class BookSubTypeREST {
    @Autowired
    private BookSubTypeService bookSubTypeService;

    @Autowired
    private BookService bookService;

    @DeleteMapping("/deleteList")
    @ResponseBody
    public void deleteType(
            @RequestParam String ids
    ) {
        String[] idsArray = ids.split("-");

        this.prepareBooksBeforeDelete(idsArray);

        this.bookSubTypeService.delete(idsArray);
    }

    public void prepareBooksBeforeDelete(String[] idsArray) {
        for(String stringId : idsArray) {
            Long id = Long.parseLong(stringId);
            this.bookService.changeItemsIfDeleteSubType(id);
        }
    }
}
