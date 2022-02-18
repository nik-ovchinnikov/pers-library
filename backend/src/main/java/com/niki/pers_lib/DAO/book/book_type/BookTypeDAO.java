package com.niki.pers_lib.DAO.book.book_type;

import com.niki.pers_lib.entities.book.book_type.BookType;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public class BookTypeDAO implements IBookTypeDAO {

    @Override
    public List<BookType> findAllByOrderByIdDesc() {
        return null;
    }

    @Override
    public List<BookType> findByName(String str) {
        return null;
    }


    @Override
    public List<BookType> findAll() {
        return null;
    }

    @Override
    public List<BookType> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<BookType> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<BookType> findAllById(Iterable<Long> integers) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Long integer) {

    }

    @Override
    public void delete(BookType entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends BookType> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends BookType> S save(S entity) {
        return null;
    }

    @Override
    public <S extends BookType> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<BookType> findById(Long integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Long integer) {
        return false;
    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends BookType> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends BookType> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<BookType> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public BookType getOne(Long integer) {
        return null;
    }

    @Override
    public BookType getById(Long integer) {
        return null;
    }

    @Override
    public <S extends BookType> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends BookType> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends BookType> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends BookType> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends BookType> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends BookType> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends BookType, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
