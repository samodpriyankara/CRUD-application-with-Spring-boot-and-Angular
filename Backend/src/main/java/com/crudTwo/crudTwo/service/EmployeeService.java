package com.crudTwo.crudTwo.service;

import com.crudTwo.crudTwo.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);

    List<Employee> getAllEmployee();

    Optional<Employee> getEmployeeById(int employeeId);

    void deleteEmployee(int employeeId);

    Employee updateEmployee(int id, Employee employee);


}
