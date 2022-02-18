package com.niki.pers_lib.entities.book;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.niki.pers_lib.entities.book.book_place.BookPlace;
import com.niki.pers_lib.entities.book.book_place.BookSubPlace;
import com.niki.pers_lib.entities.book.book_type.BookSubType;
import com.niki.pers_lib.entities.book.book_type.BookType;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "book")
public class Book {
    private String name;
    private String description;
    private String key;


    @JoinColumn(name = "book_type_id")
    @ManyToOne(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH}
    )
    private BookType bookType;

    @JoinColumn(name = "book_subtype_id")
    @ManyToOne(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH}
    )
    private BookSubType bookSubType;

    @JoinColumn(name = "book_place_id")
    @ManyToOne(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH}
    )
    private BookPlace bookPlace;

    @JoinColumn(name = "book_subplace_id")
    @ManyToOne(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH}
    )
    private BookSubPlace bookSubPlace;

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "book",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.PERSIST, CascadeType.REMOVE}
//            cascade = {CascadeType.ALL}
    )
    private List<BookPicture> bookPictureList;

    private Date creationDate;
    private Date lastChangeDate;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, insertable = false, name = "id")
    private long id;

    @Override
    public String toString() {
        return "Book{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", creationDate=" + creationDate +
                ", lastChangeDate=" + lastChangeDate +
                ", bookType=" + bookType +
                ", bookSubType=" + bookSubType +
                ", bookPlace=" + bookPlace +
                ", bookSubPlace=" + bookSubPlace +
                ", bookPictureList=" + bookPictureList +
                ", id=" + id +
                '}';
    }
}
