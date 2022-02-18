package com.niki.pers_lib.entities.book.book_place;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.niki.pers_lib.entities.book.Book;
import com.niki.pers_lib.entities.book.book_type.BookType;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
//@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "book_subplace")
public class BookSubPlace {


    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;
    private Date creationDate;
    private Date lastChangeDate;
    private String bookPlaceName;

    @JoinColumn(name = "book_place_id")
    @ManyToOne(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE, CascadeType.REFRESH,}
    )
    @JsonIgnore
    private BookPlace bookPlace;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, insertable = false, name = "id")
    private long id;

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "bookSubPlace",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.PERSIST}
//            cascade = {CascadeType.ALL}
    )
    @JsonIgnore
    private List<Book> bookList;

    @Override
    public String toString() {
            return "BookSubPlace{" +
                    "name='" + name + '\'' +
                    ", description='" + description + '\'' +
                    ", creationDate=" + creationDate +
                    ", lastChangeDate=" + lastChangeDate +
                    ", bookPlaceName='" + bookPlaceName + '\'' +
                    ", bookPlace=" + bookPlace.getId() +
                    ", id=" + id +
//                ", bookList=" + bookList +
                    '}';
    }
}
