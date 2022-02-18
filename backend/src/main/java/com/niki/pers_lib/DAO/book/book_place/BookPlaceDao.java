package com.niki.pers_lib.DAO.book.book_place;

import com.niki.pers_lib.entities.book.book_place.BookPlace;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public class BookPlaceDao implements IBookPlaceDao{
    @Override
    public List<BookPlace> findAllByOrderByIdDesc() {
        return null;
    }

    @Override
    public List<BookPlace> findByName(String str) {
        return null;
    }


    @Override
    public List<BookPlace> findAll() {
        return null;
    }

    @Override
    public List<BookPlace> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<BookPlace> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<BookPlace> findAllById(Iterable<Long> integers) {
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
    public void delete(BookPlace entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends BookPlace> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends BookPlace> S save(S entity) {
        return null;
    }

    @Override
    public <S extends BookPlace> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<BookPlace> findById(Long integer) {
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
    public <S extends BookPlace> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends BookPlace> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<BookPlace> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public BookPlace getOne(Long integer) {
        return null;
    }

    @Override
    public BookPlace getById(Long integer) {
        return null;
    }

    @Override
    public <S extends BookPlace> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends BookPlace> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends BookPlace> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends BookPlace> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends BookPlace> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends BookPlace> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends BookPlace, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
