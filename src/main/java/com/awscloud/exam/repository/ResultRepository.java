package com.awscloud.exam.repository;

import com.awscloud.exam.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultRepository
        extends JpaRepository<Result, Long> {

    List<Result> findByStudentStudentId(Long studentId);

}
