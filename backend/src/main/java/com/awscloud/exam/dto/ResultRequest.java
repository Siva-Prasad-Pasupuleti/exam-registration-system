package com.awscloud.exam.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResultRequest {

    private Long studentId;
    private Long examId;
    private Integer marks;
    private String status;
}
