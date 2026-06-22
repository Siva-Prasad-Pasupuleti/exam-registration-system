package com.awscloud.exam.service;

import com.awscloud.exam.entity.Exam;
import com.awscloud.exam.repository.ExamRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {

    private final ExamRepository repository;

    public ExamService(ExamRepository repository) {
        this.repository = repository;
    }

    public Exam create(Exam exam) {
        return repository.save(exam);
    }

    public List<Exam> getAll() {
        return repository.findAll();
    }

    public Exam getById(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Exam update(Long id, Exam exam) {

        Exam existing = repository.findById(id)
                .orElseThrow();

        existing.setExamName(exam.getExamName());
        existing.setExamDate(exam.getExamDate());
        existing.setTotalMarks(exam.getTotalMarks());

        return repository.save(existing);
    }

    public void delete(Long id) {

        try {
            repository.deleteById(id);
        } catch (DataIntegrityViolationException e) {

            throw new RuntimeException(
                    "Cannot delete exam because registrations or results exist");
        }
    }
}
