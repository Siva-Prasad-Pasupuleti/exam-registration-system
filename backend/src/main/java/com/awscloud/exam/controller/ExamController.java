package com.awscloud.exam.controller;

import com.awscloud.exam.entity.Exam;
import com.awscloud.exam.service.ExamService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

    private final ExamService service;

    public ExamController(ExamService service) {
        this.service = service;
    }

    @PostMapping
    public Exam create(@RequestBody Exam exam) {
        return service.create(exam);
    }

    @GetMapping
    public List<Exam> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Exam getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Exam update(
            @PathVariable Long id,
            @RequestBody Exam exam) {

        return service.update(id, exam);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
