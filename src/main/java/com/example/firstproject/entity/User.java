package com.example.firstproject.entity;

import java.sql.Timestamp;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Builder;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import lombok.Data;

// ORM - Object Relation Mapping
@Data
@Entity
@NoArgsConstructor
public class User {
    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
    private String email;
    //ROLE_USER, ROLE_ADMIN
    private String role;
    //google
    private String provider;
    //sub=114400066170195234643
    private String providerId;
    @CreationTimestamp
    private Timestamp createDate;

    @Builder
    public User(int id, String username, String password, String email, String role, String provider, String providerId, Timestamp createDate) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.provider = provider;
        this.providerId = providerId;
        this.createDate = createDate;
    }
}