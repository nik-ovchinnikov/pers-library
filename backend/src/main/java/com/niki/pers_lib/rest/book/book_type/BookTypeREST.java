package com.niki.pers_lib.rest.book.book_type;

import com.niki.pers_lib.entities.book.book_type.BookSubType;
import com.niki.pers_lib.entities.book.book_type.BookType;
import com.niki.pers_lib.services.book.BookService;
import com.niki.pers_lib.services.book.book_type.BookTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/type")
public class BookTypeREST {

    @Autowired
    private BookTypeService bookTypeService;

    @Autowired
    private BookService bookService;

    @PostMapping("/add")
    public void addType(@RequestBody BookType bookType) {
        if(bookType.getBookSubTypeList() != null) {
            for(BookSubType subtype: bookType.getBookSubTypeList()) {
                subtype.setBookType(bookType);
            }
        }
           bookTypeService.create(bookType);
    }

    @GetMapping("/getAll")
    public List<BookType> getAllTypeList() {
       return bookTypeService.getAll();
    }

    @GetMapping("/checkName")
    @ResponseBody
    public List<BookType> checkName(@RequestParam String name) {
        return bookTypeService.checkName(name);
    }

    @DeleteMapping("/deleteList")
    @ResponseBody
    public void deleteType(
            @RequestParam String names
    ) {
        String[] idsArray = names.split("-");
//
        this.prepareBooksBeforeDelete(idsArray);

        this.bookTypeService.delete(idsArray);
    }

    @PutMapping("/updateType")
    public void updateType(@RequestBody BookType updatedBookType) {
        if(updatedBookType.getBookSubTypeList() != null) {
            for(BookSubType st: updatedBookType.getBookSubTypeList()) {
                st.setBookType(updatedBookType);
            }
        }
//        System.out.println(updatedBookType);
        this.bookTypeService.updateBookType(updatedBookType);
    }

    public void prepareBooksBeforeDelete(String[] idsArray) {
        for(String stringId : idsArray) {
            Long id = Long.parseLong(stringId);
            this.bookService.changeItemsIfDeleteType(id);
        }
    }
    //todo Разобраться с обработчиком ошибок!!!
//    @ExceptionHandler(Exception.class)
//    public Response handleException(Exception e) {
//        Response error = new Response();
//        return new Response();
//    }
}
