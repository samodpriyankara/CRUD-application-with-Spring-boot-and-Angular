package com.crudTwo.crudTwo.service.IMPL;

import com.crudTwo.crudTwo.entity.Employee;
import com.crudTwo.crudTwo.repository.EmployeeRepository;
import com.crudTwo.crudTwo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceIMPL implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    @Override
    public Optional<Employee> getEmployeeById(int employeeId) {
        if (employeeRepository.existsById(employeeId)) {
            return employeeRepository.findById(employeeId);
        } else {
            throw new RuntimeException("No  employee found");
        }


    }

    @Override
    public void deleteEmployee(int employeeId) {

        if (employeeRepository.existsById(employeeId)) {
            employeeRepository.deleteById(employeeId);
        } else {
            throw new RuntimeException("No  employee found");
        }
    }

    @Override
    public Employee updateEmployee(int id, Employee employee) {

        if (employeeRepository.existsById(id)) {
            return employeeRepository.save(employee);
        } else {
            throw new RuntimeException("No  employee found");
        }
    }


}
