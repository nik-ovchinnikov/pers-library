package com.niki.pers_lib.DAO.book.book_type;

import com.niki.pers_lib.entities.book.book_type.BookSubType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBookSubTypeDAO extends JpaRepository<BookSubType, Long> {
    List<BookSubType> findAllByBookTypeName(String name);

    void deleteBookSubTypeById(long id);
}
