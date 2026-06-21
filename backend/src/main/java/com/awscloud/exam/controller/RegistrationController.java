package com.awscloud.exam.controller;

import com.awscloud.exam.dto.RegistrationRequest;
import com.awscloud.exam.entity.Registration;
import com.awscloud.exam.service.RegistrationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    private final RegistrationService service;

    public RegistrationController(
            RegistrationService service) {
        this.service = service;
    }

    @PostMapping
    public Registration create(
            @RequestBody RegistrationRequest request) {

        return service.create(request);
    }

    @GetMapping
    public List<Registration> getAll() {
        return service.getAll();
    }
}
