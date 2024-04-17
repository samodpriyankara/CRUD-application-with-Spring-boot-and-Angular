package com.crudTwo.crudTwo.repository;

import com.crudTwo.crudTwo.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
    Employee findAllByemployeeName(String name);
}
