package com.crudTwo.crudTwo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "employee")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int employeeId;
    private String employeeName;
    private String employeeContactNumber;
    private  String employeeAddress;
    private String employeeGender;
    private String employeeDepartment;
    private String employeeSkill;

}
