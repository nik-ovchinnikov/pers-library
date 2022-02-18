package com.niki.pers_lib.services.book.book_place;

import com.niki.pers_lib.DAO.book.book_place.IBookSubPlaceDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class BookSubPlaceService {
    @Autowired
    private IBookSubPlaceDao bookSubPlaceDao;


    @Transactional
    public void delete(String[] names) {
        for(String name: names) {
            long id = Integer.parseInt(name);
            bookSubPlaceDao.deleteBookSubPlaceById(id);
        }

    }
}
