package com.awscloud.exam.service;

import com.awscloud.exam.dto.ResultRequest;
import com.awscloud.exam.entity.Exam;
import com.awscloud.exam.entity.Result;
import com.awscloud.exam.entity.Student;
import com.awscloud.exam.repository.ExamRepository;
import com.awscloud.exam.repository.ResultRepository;
import com.awscloud.exam.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ResultService {

    private final ResultRepository resultRepository;
    private final StudentRepository studentRepository;
    private final ExamRepository examRepository;

    public ResultService(
            ResultRepository resultRepository,
            StudentRepository studentRepository,
            ExamRepository examRepository) {

        this.resultRepository = resultRepository;
        this.studentRepository = studentRepository;
        this.examRepository = examRepository;
    }

    public Result create(ResultRequest request) {

        Student student =
                studentRepository.findById(
                        request.getStudentId())
                        .orElseThrow();

        Exam exam =
                examRepository.findById(
                        request.getExamId())
                        .orElseThrow();

        Result result =
                Result.builder()
                        .student(student)
                        .exam(exam)
                        .marks(request.getMarks())
                        .status(request.getStatus())
                        .publishedAt(LocalDateTime.now())
                        .build();

        return resultRepository.save(result);
    }

    public List<Result> getAll() {
        return resultRepository.findAll();
    }

    public List<Result> getByStudentId(Long studentId) {
        return resultRepository
                .findByStudentStudentId(studentId);
    }
}
