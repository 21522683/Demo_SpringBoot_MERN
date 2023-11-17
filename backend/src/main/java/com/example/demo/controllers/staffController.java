package com.example.demo.controllers;


import com.example.demo.models.Staff;
import com.example.demo.services.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/staff")
public class staffController {
    @Autowired
    private StaffService staffService;

    @GetMapping
    public ResponseEntity<List<Staff>> getAllStaffs() {
        return new ResponseEntity<List<Staff>>(staffService.getStaffs(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Staff>> getSingleStaff(@PathVariable Long id) {
        return  new ResponseEntity<Optional<Staff>>(staffService.getSingleStaff(id),HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Staff> addStaff(@RequestBody Staff newStaff) {
        return new ResponseEntity<Staff>(staffService.addStaff(newStaff),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Optional<Staff>> updateStaff(@RequestBody Staff newStaff, @PathVariable Long id) {
        return new ResponseEntity<Optional<Staff>>(staffService.updateStaff(id,newStaff),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Staff>> deleteStaff( @PathVariable Long id) {
        return new ResponseEntity<Optional<Staff>>(staffService.deleteStaff(id),HttpStatus.OK);
    }
}
