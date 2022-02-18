package com.niki.pers_lib.services.book.book_type;

import com.niki.pers_lib.DAO.book.book_type.IBookSubTypeDAO;
import com.niki.pers_lib.DAO.book.book_type.IBookTypeDAO;
import com.niki.pers_lib.entities.book.book_type.BookSubType;
import com.niki.pers_lib.entities.book.book_type.BookType;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BookTypeService implements IBookTypeService {
    private static final Logger logger = LogManager.getLogger(BookTypeService.class);

    @Autowired
    private IBookTypeDAO bookTypeDAO;
   //todo сделать общий интерфейс для Type and SubType

    @Override
    public BookType create(BookType bookType) {
       logger.info("Добавлен новый тип: " + bookType.toString());
       return bookTypeDAO.save(bookType);
    }

    public List<BookType> getAll() {
        List<BookType> lt = bookTypeDAO.findAll();

        logger.info("Запрос на получение всех типов книг");
       return lt;
    }

    public List<BookType> checkName(String str) {
        List<BookType> bookTypeArray = bookTypeDAO.findByName(str);
        return bookTypeArray;
    }

    @Transactional
    public void delete(String[] names) {
        for(String name: names) {
            Long id = Long.parseLong(name);
            bookTypeDAO.deleteById(id);
            logger.info("Удалён тип '" + name + "'");
        }

    }

    public void updateBookType(BookType updatedBookType) {
        this.bookTypeDAO.save(updatedBookType);
        logger.info("Изменён тип. Теперь он такой: " + updatedBookType.toString());
    }
}
