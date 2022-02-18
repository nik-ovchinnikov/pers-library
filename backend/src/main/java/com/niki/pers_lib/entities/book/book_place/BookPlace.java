package com.niki.pers_lib.entities.book.book_place;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.niki.pers_lib.entities.book.Book;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "book_place")
public class BookPlace {


    private String name;
    private String description;

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "bookPlace",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.PERSIST, CascadeType.REMOVE}
//            cascade = {CascadeType.ALL}
    )
    private List<BookSubPlace> bookSubPlaceList;
    private Date creationDate;
    private Date lastChangeDate;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, insertable = false, name = "id")
    private long id;

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "bookPlace",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.PERSIST}
//            cascade = {CascadeType.ALL}
    )
    @JsonIgnore
    private List<Book> bookList;

    @Override
    public String toString() {
        return "BookPlace{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", bookSubPlaceList=" + bookSubPlaceList +
                ", creationDate=" + creationDate +
                ", lastChangeDate=" + lastChangeDate +
                ", id=" + id +
//                ", bookList=" + bookList +
                '}';
    }
}
