package com.awscloud.exam.service;

import com.awscloud.exam.dto.RegistrationRequest;
import com.awscloud.exam.entity.Exam;
import com.awscloud.exam.entity.Registration;
import com.awscloud.exam.entity.Student;
import com.awscloud.exam.repository.ExamRepository;
import com.awscloud.exam.repository.RegistrationRepository;
import com.awscloud.exam.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RegistrationService {

    private final RegistrationRepository registrationRepository;
    private final StudentRepository studentRepository;
    private final ExamRepository examRepository;

    public RegistrationService(
            RegistrationRepository registrationRepository,
            StudentRepository studentRepository,
            ExamRepository examRepository) {

        this.registrationRepository = registrationRepository;
        this.studentRepository = studentRepository;
        this.examRepository = examRepository;
    }

    public Registration create(
            RegistrationRequest request) {

        Student student =
                studentRepository.findById(
                        request.getStudentId())
                        .orElseThrow();

        Exam exam =
                examRepository.findById(
                        request.getExamId())
                        .orElseThrow();

        Registration registration =
                Registration.builder()
                        .student(student)
                        .exam(exam)
                        .registeredAt(
                                LocalDateTime.now())
                        .build();

        return registrationRepository.save(
                registration);
    }

    public List<Registration> getAll() {
        return registrationRepository.findAll();
    }
}
