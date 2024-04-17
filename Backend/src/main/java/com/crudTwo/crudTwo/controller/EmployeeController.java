package com.crudTwo.crudTwo.controller;


import com.crudTwo.crudTwo.entity.Employee;
import com.crudTwo.crudTwo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("api/v1/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/save")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @GetMapping("get-all")
    public List<Employee> getAllEmployee() {
        return employeeService.getAllEmployee();
    }

    @GetMapping(value = "get-by-id/{id}")
    public Optional<Employee> getEmployeeById(@RequestParam(value = "id") int employeeId){
        return employeeService.getEmployeeById(employeeId);

    }
    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable(value = "id") int employeeId){
        employeeService.deleteEmployee(employeeId);
    }

    @PutMapping("/update/{id}")
    public Employee updateEmployee(@PathVariable int id, @RequestBody Employee employee){
        return employeeService.updateEmployee(id,employee);
    }

}
