package com.niki.pers_lib.services.book.book_type;

import com.niki.pers_lib.DAO.book.book_type.IBookSubTypeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class BookSubTypeService implements IBookSubTypeService {
    @Autowired
    private IBookSubTypeDAO bookSubTypeDAO;


    @Transactional
    public void delete(String[] names) {
        for(String name: names) {
            long id = Integer.parseInt(name);
            bookSubTypeDAO.deleteBookSubTypeById(id);
        }

    }
}
