package com.niki.pers_lib.services.book.book_place;

import com.niki.pers_lib.DAO.book.book_place.IBookPlaceDao;
import com.niki.pers_lib.DAO.book.book_place.IBookSubPlaceDao;
import com.niki.pers_lib.entities.book.book_place.BookPlace;
import com.niki.pers_lib.entities.book.book_place.BookSubPlace;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BookPlaceService {
    private static final Logger logger = LogManager.getLogger(BookPlaceService.class);

    @Autowired
    private IBookPlaceDao bookPlaceDao;
    //todo сделать общий интерфейс для Place and SubPlace

    public BookPlace create(BookPlace bookPlace) {
        logger.info("Добавлено новое место расположения: " + bookPlace.toString());
        return bookPlaceDao.save(bookPlace);
    }

    public List<BookPlace> getAll() {
        List<BookPlace> lt = bookPlaceDao.findAll();
        logger.info("Запрос на получение всех мест расположения книг");
        return lt;
    }

    public List<BookPlace> checkName(String str) {
        List<BookPlace> bookPlaceArray = bookPlaceDao.findByName(str);
        return bookPlaceArray;
    }

    @Transactional
    public void delete(String[] names) {
        for(String name: names) {
            Long id = Long.parseLong(name);
            bookPlaceDao.deleteById(id);
            logger.info("Удалёно место расположения '" + name + "'");
        }

    }

    public void updateBookPlace(BookPlace updatedBookPlace) {
        this.bookPlaceDao.save(updatedBookPlace);
        logger.info("Изменёно место расположения. Теперь оно выглядит так: " + updatedBookPlace.toString());
    }
}
