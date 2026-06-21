package com.awscloud.exam.repository;

import com.awscloud.exam.entity.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository
        extends JpaRepository<Registration, Long> {
}
