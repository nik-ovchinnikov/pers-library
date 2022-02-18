package com.niki.pers_lib.DAO.book.book_type;

import com.niki.pers_lib.entities.book.book_type.BookSubType;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public class BookSubTypeDAO implements IBookSubTypeDAO {
    @Override
    public List<BookSubType> findAllByBookTypeName(String name) {
        return null;
    }

    @Override
    public void deleteBookSubTypeById(long id) {

    }

    //стандартные методы, наследованные от JpaRepository
    @Override
    public List<BookSubType> findAll() {
        return null;
    }

    @Override
    public List<BookSubType> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<BookSubType> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<BookSubType> findAllById(Iterable<Long> integers) {
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
    public void delete(BookSubType entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Long> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends BookSubType> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends BookSubType> S save(S entity) {
        return null;
    }

    @Override
    public <S extends BookSubType> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<BookSubType> findById(Long integer) {
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
    public <S extends BookSubType> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends BookSubType> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<BookSubType> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public BookSubType getOne(Long integer) {
        return null;
    }

    @Override
    public BookSubType getById(Long integer) {
        return null;
    }

    @Override
    public <S extends BookSubType> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends BookSubType> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends BookSubType> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends BookSubType> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends BookSubType> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends BookSubType> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends BookSubType, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }
}
