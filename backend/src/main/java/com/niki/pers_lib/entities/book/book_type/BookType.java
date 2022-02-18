package com.niki.pers_lib.entities.book.book_type;

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
@Table(name = "book_type")
public class BookType {


    private String name;
    private String description;

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "bookType",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.PERSIST, CascadeType.REMOVE}
//            cascade = {CascadeType.ALL}
    )
    private List<BookSubType> bookSubTypeList;
    private Date creationDate;
    private Date lastChangeDate;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, insertable = false, name = "id")
    private long id;

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "bookType"
//            cascade = {CascadeType.ALL}
    )
    @JsonIgnore
    private List<Book> bookList;

    @Override
    public String toString() {
        return "BookType{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", bookSubTypeList=" + bookSubTypeList +
                ", creationDate=" + creationDate +
                ", lastChangeDate=" + lastChangeDate +
                ", id=" + id +
//                ", bookList=" + bookList +
                '}';
    }
}
