package com.niki.pers_lib.services.book;

import com.niki.pers_lib.DAO.book.IBookDao;
import com.niki.pers_lib.DAO.book.IBookPictureDao;
import com.niki.pers_lib.DAO.book.book_place.IBookPlaceDao;
import com.niki.pers_lib.DAO.book.book_place.IBookSubPlaceDao;
import com.niki.pers_lib.DAO.book.book_type.IBookSubTypeDAO;
import com.niki.pers_lib.DAO.book.book_type.IBookTypeDAO;
import com.niki.pers_lib.entities.book.Book;
import com.niki.pers_lib.entities.book.BookPicture;
import com.niki.pers_lib.entities.book.book_place.BookPlace;
import com.niki.pers_lib.entities.book.book_place.BookSubPlace;
import com.niki.pers_lib.entities.book.book_type.BookSubType;
import com.niki.pers_lib.entities.book.book_type.BookType;
import com.niki.pers_lib.services.book.book_place.BookPlaceService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {
    private static final Logger logger = LogManager.getLogger(BookPlaceService.class);

    private String storageRoot = "/app/src/main/resources/static/pictures/books/";

    @Autowired
    private IBookDao bookDao;

    @Autowired
    private BookFileService bookFileService;

    @Autowired
    private IBookPictureDao bookPictureDao;

    @Autowired
    private IBookTypeDAO bookTypeDAO;


    @Autowired
    private IBookPlaceDao bookPlaceDao;

    @Autowired
    private IBookSubPlaceDao bookSubPlaceDao;

    @Autowired
    private IBookSubTypeDAO bookSubTypeDAO;

    //todo сделать общий интерфейс для Place and SubPlace

    public List<String> create(Book book) {

        logger.info("Добавлена новая книга: " + book.toString());
        System.out.println(book);
        bookDao.save(book);

    //Создаём массив с новыми названиями фото
        List<String> nameList = new ArrayList<String>();
        if(book.getBookPictureList().size() > 0) {
            //По ключу достаём новый Id книги
            List<Book> bookList = bookDao.findByKey(book.getKey());
            Book book1 = bookList.get(0);
            // По Id книги достаём ид фот
            List<BookPicture> bookPictureList = bookPictureDao.findByBookId(book1.getId());
            // Длч каждой фото по ид заполнякм имя фото, одновременно добавляя в массив, который надо будет вернуть
            for (BookPicture bp : bookPictureList) {
                bp.setName(Long.toString(book1.getId()) + '-' + Long.toString(bp.getId()));
                nameList.add(bp.getName());
                bookPictureDao.save(bp);
            }
        }
        return nameList;
    }
    public List<String> update(Book book) {

        logger.info("Изменена книга: " + book.toString());
        System.out.println("V nachale updateBook");
        System.out.println(book.getBookPictureList());
        List<BookPicture> existingPictures = bookPictureDao.findByBookId(book.getId());
        bookDao.save(book);

        //Добыть старые имена, после удаления
        //Эти имена надо исключить из массива полученных имён
        //оставшиеся просто вернуть и ничего не делать на фронтенде

        //Создаём массив с новыми названиями фото
        List<String> nameList = new ArrayList<String>();
        if(book.getBookPictureList().size() > 0) {
            List<BookPicture> bookPictureList = bookPictureDao.findByBookId(book.getId());
            // Длч каждой фото по ид заполнякм имя фото, одновременно добавляя в массив, который надо будет вернуть
            for (BookPicture bp : bookPictureList) {
                //Добыть старые имена, после удаления
                //Эти имена надо исключить из массива полученных имён
//                boolean isNameNew = false;
//                for(BookPicture existingPicture: existingPictures) {
//                    if(existingPicture.getName() == bp.getName()){
//                        isNameNew = false;
//                    }else {
//                        isNameNew = true;
//                    }
//                }

                if(bp.getName() == "") {
                    bp.setName(Long.toString(book.getId()) + '-' + Long.toString(bp.getId()));
                    nameList.add(bp.getName());
                    bookPictureDao.save(bp);
                }
            }
        }
        return nameList;
    }

    public List<Book> getAll() {
        return bookDao.findAll();
    }

    public List<Book> checkKey(String str) {
        List<Book> bookList = bookDao.findByKey(str);
        return bookList;
    }

    public void deleteItemList(Book[] books) {
        for(Book book: books) {
            System.out.println(book);
            for(BookPicture picture: book.getBookPictureList()) {
                File file = new File(storageRoot + picture.getName());
                file.delete();

                bookPictureDao.delete(picture);
            }
            bookDao.delete(book);
        }
    }
    //pri udalenii tipov i mest
    public void changeItemsIfDeleteSubType(Long id) {
        BookSubType bookSubType = bookSubTypeDAO.getById(id);
       List<Book> bookList = this.bookDao.findByBookSubType(bookSubType);
       for(Book book : bookList) {
           book.setBookSubType(null);
           bookDao.save(book);
       }
    }
    public void changeItemsIfDeleteType(Long id) {
        BookType bookType= bookTypeDAO.getById(id);
        for(BookSubType subType: bookType.getBookSubTypeList()){
            changeItemsIfDeleteSubType(subType.getId());
        }
        List<Book> bookList = this.bookDao.findByBookType(bookType);
        for(Book book : bookList) {
            book.setBookType(null);
            bookDao.save(book);
        }
    }
    public void changeItemsIfDeletePlace(Long id) {
        BookPlace bookPlace= bookPlaceDao.getById(id);
//        System.out.println("BookPlace tut");
//        System.out.println(bookPlace);
        for(BookSubPlace subPlace: bookPlace.getBookSubPlaceList()){
            changeItemsIfDeleteSubPlace(subPlace.getId());
        }
        List<Book> bookList = this.bookDao.findByBookPlace(bookPlace);
//        System.out.println("Spisok knig na udalenie");
//        System.out.println(bookList);
        for(Book book : bookList) {
            book.setBookPlace(null);
            bookDao.save(book);
        }
    }
    public void changeItemsIfDeleteSubPlace(Long id) {
        BookSubPlace bookSubPlace = bookSubPlaceDao.getById(id);
        List<Book> bookList = this.bookDao.findByBookSubPlace(bookSubPlace);
        for(Book book : bookList) {
            book.setBookSubPlace(null);
            bookDao.save(book);
        }
    }

    public void deleteOldPictures(List<Long> idArray) {
        bookFileService.deletePictureFiles(idArray);
        for(Long id: idArray) {
            bookPictureDao.deleteById(id);
        }
    }
}
