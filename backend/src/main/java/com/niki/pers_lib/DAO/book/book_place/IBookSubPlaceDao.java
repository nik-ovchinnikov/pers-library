package com.niki.pers_lib.DAO.book.book_place;

import com.niki.pers_lib.entities.book.book_place.BookSubPlace;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBookSubPlaceDao  extends JpaRepository<BookSubPlace, Long> {
    List<BookSubPlace> findAllByBookPlaceName(String name);

    void deleteBookSubPlaceById(long id);
}
