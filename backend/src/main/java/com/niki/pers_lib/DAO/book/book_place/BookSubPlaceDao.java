package com.niki.pers_lib.DAO.book.book_place;

import com.niki.pers_lib.entities.book.book_place.BookSubPlace;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public class BookSubPlaceDao implements IBookSubPlaceDao {
    @Override
    public List<BookSubPlace> findAllByBookPlaceName(String name) {
        return null;
    }

    @Override
    public void deleteBookSubPlaceById(long id) {

    }

    @Override
    public List<BookSubPlace> findAll() {
        return null;
    }

    @Override
    public List<BookSubPlace> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<BookSubPlace> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<BookSubPlace> findAllById(Iterable<Long> integers) {
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
    public void delete(BookSubPlace entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends BookSubPlace> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends BookSubPlace> S save(S entity) {
        return null;
    }

    @Override
    public <S extends BookSubPlace> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<BookSubPlace> findById(Long integer) {
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
    public <S extends BookSubPlace> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends BookSubPlace> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<BookSubPlace> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public BookSubPlace getOne(Long integer) {
        return null;
    }

    @Override
    public BookSubPlace getById(Long integer) {
        return null;
    }

    @Override
    public <S extends BookSubPlace> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends BookSubPlace> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends BookSubPlace> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends BookSubPlace> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends BookSubPlace> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends BookSubPlace> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends BookSubPlace, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
