package com.niki.pers_lib.DAO.book;

import com.niki.pers_lib.entities.book.BookPicture;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public class BookPictureDao implements IBookPictureDao{

    @Override
    public List<BookPicture> findByBookId(long bookId) {
        return null;
    }

    @Override
    public List<BookPicture> findAll() {
        return null;
    }

    @Override
    public List<BookPicture> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<BookPicture> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<BookPicture> findAllById(Iterable<Long> integers) {
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
    public void delete(BookPicture entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends BookPicture> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends BookPicture> S save(S entity) {
        return null;
    }

    @Override
    public <S extends BookPicture> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<BookPicture> findById(Long integer) {
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
    public <S extends BookPicture> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends BookPicture> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<BookPicture> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public BookPicture getOne(Long integer) {
        return null;
    }

    @Override
    public BookPicture getById(Long integer) {
        return null;
    }

    @Override
    public <S extends BookPicture> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends BookPicture> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends BookPicture> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends BookPicture> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends BookPicture> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends BookPicture> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends BookPicture, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
