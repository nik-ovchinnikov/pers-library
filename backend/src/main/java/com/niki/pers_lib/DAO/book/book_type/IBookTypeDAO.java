package com.niki.pers_lib.DAO.book.book_type;

import com.niki.pers_lib.entities.book.book_type.BookType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBookTypeDAO extends JpaRepository<BookType, Long>{

//    List<Type> findByName(String str);
//    Long deleteTypeByName(String str);

    List<BookType> findAllByOrderByIdDesc();

    List<BookType> findByName(String str);

}
