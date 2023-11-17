package com.example.demo.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "staff")
public class Staff {

    @Id
    private Long id;
    private String name;
    private String phone;
    private String avatarURL;
    private String email;
    private int salary;
    private int salaryFinal;
    private int quantityHour;
    private String birthday;
    private String type;
    private int quantityError;


    public int getSalaryFinal() {
        if (type.equals("Lập trình viên")) {
            return this.salary + this.quantityHour*200000;
        }
        else if (type.equals("Kiểm thử viên")) {
            return this.salary + quantityError*50000;
        }
        else return 0;
    }

}
