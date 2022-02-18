package com.niki.pers_lib.DAO.book.book_place;

import com.niki.pers_lib.entities.book.book_place.BookPlace;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBookPlaceDao extends JpaRepository<BookPlace, Long> {
    List<BookPlace> findAllByOrderByIdDesc();

    List<BookPlace> findByName(String str);

}
