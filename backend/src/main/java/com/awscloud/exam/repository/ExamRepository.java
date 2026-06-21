package com.awscloud.exam.repository;

import com.awscloud.exam.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository
        extends JpaRepository<Exam, Long> {
}
