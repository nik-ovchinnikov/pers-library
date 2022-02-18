package com.niki.pers_lib.DAO.book;

import com.niki.pers_lib.entities.book.Book;
import com.niki.pers_lib.entities.book.book_place.BookPlace;
import com.niki.pers_lib.entities.book.book_place.BookSubPlace;
import com.niki.pers_lib.entities.book.book_type.BookSubType;
import com.niki.pers_lib.entities.book.book_type.BookType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBookDao extends JpaRepository<Book, Long> {
    List<Book> findByKey(String key);

    List<Book> findByBookSubType(BookSubType bookSubType);
//    List<Book> findByBookTypeId(Long id);
    List<Book> findByBookType(BookType type);
    List<Book> findByBookPlace(BookPlace bookPlace);
    List<Book> findByBookSubPlace(BookSubPlace bookSubPlace);
}
