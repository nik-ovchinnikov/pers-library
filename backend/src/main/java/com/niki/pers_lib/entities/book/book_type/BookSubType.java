package com.niki.pers_lib.entities.book.book_type;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.niki.pers_lib.entities.book.Book;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

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
@Table(name = "book_subtype")
public class BookSubType {


    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;
    private Date creationDate;
    private Date lastChangeDate;
    private String bookTypeName;

    @JoinColumn(name = "book_type_id")
    @ManyToOne(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE, CascadeType.REFRESH,}
    )
    @JsonIgnore
    private BookType bookType;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, insertable = false, name = "id")
    private long id;

    @OneToMany(
            fetch = FetchType.LAZY,
            mappedBy = "bookSubType"
//            cascade = {CascadeType.ALL}
    )
    @JsonIgnore
    private List<Book> bookList;

    @Override
    public String toString() {
        if ((id != -1) && (name.equals(""))) {
            return "BookSubType{" +
                    "name='" + name + '\'' +
                    ", description='" + description + '\'' +
                    ", creationDate=" + creationDate +
                    ", lastChangeDate=" + lastChangeDate +
                    ", bookTypeName='" + bookTypeName + '\'' +
                    ", bookType=" + bookType.getId() +
                    ", id=" + id +
//                ", bookList=" + bookList +
                    '}';
        } else {
            return "Отсутствует";
        }
    }
}
