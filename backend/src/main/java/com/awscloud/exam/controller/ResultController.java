package com.awscloud.exam.controller;

import com.awscloud.exam.dto.ResultRequest;
import com.awscloud.exam.entity.Result;
import com.awscloud.exam.service.ResultService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")
public class ResultController {

    private final ResultService service;

    public ResultController(ResultService service) {
        this.service = service;
    }

    @PostMapping
    public Result create(
            @RequestBody ResultRequest request) {

        return service.create(request);
    }

    @GetMapping
    public List<Result> getAll() {
        return service.getAll();
    }

    @GetMapping("/student/{studentId}")
    public List<Result> getByStudent(
            @PathVariable Long studentId) {

        return service.getByStudentId(studentId);
    }
}
