package com.example.firstproject.repository;

import com.example.firstproject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

//crud 함수를 JpaRepository가 들고 있음
//JpaRepository를 상속해서 @Repository라는 annotation이 없어도 IoC됨.
//<User, Integer>- User: type, Integer: User model의 primary key type
public interface UserRepository extends JpaRepository<User, Integer> {
    //findBy(규칙) -> Username 문법
    //select * from user where username = 1?(이게 username)
    public User findByUsername(String username);//jpa query method
}
