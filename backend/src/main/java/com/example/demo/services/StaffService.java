package com.example.demo.services;

import com.example.demo.models.Staff;
import com.example.demo.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffService {
    @Autowired
    private StaffRepository staffRepository;

    public List<Staff> getStaffs() {
        return staffRepository.findAll();
    }

    public Optional<Staff> getSingleStaff(Long id) {
        return staffRepository.findById(id);
    }

    public Staff addStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    public Optional<Staff> deleteStaff(Long id) {
        Optional<Staff> staff = staffRepository.findById(id);
        staffRepository.deleteById(id);
        return staff;
    }

    public Optional<Staff> updateStaff(Long id, Staff newStaff) {
        Optional<Staff> staffUpdated = staffRepository.findById(id)
                .map(staff -> {
                    staff.setName(newStaff.getName());
                    staff.setEmail(newStaff.getEmail());
                    staff.setPhone(newStaff.getPhone());
                    staff.setType(newStaff.getType());
                    staff.setSalary(newStaff.getSalary());
                    staff.setQuantityError(newStaff.getQuantityError());
                    staff.setQuantityHour(newStaff.getQuantityHour());
                    staff.setAvatarURL(newStaff.getAvatarURL());
                    staff.setBirthday(newStaff.getBirthday());
                    staff.setSalaryFinal(newStaff.getSalaryFinal());
                    return staffRepository.save(staff);
                });
        return staffUpdated;
    }
}
