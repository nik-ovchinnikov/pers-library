package com.niki.pers_lib.DAO.book;

import com.niki.pers_lib.entities.book.BookPicture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBookPictureDao extends JpaRepository<BookPicture, Long> {
    List<BookPicture> findByBookId(long bookId);
}
