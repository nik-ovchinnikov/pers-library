package com.niki.pers_lib.entities.book;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "book_picture")
public class BookPicture {

    @Column(name = "NAME")
    private String name;

    @JoinColumn(name = "book_id")
    @ManyToOne(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE, CascadeType.REFRESH}
    )
    @JsonIgnore
    private Book book;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Override
    public String toString() {
        return "BookPicture{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", book=" + book.getId() +
                '}';
    }
}
