package com.awscloud.exam.repository;

import com.awscloud.exam.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository
        extends JpaRepository<Student, Long> {

}
