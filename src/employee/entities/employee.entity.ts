import {Entity, PrimaryGeneratedColumn,Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinTable} from 'typeorm'
import { ContactInfo } from './contact_info.entity';
import { Meeting } from './meeting.entity';
import { Task } from './task.entity';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // Self Referencing manager
    @ManyToOne(()=> Employee, employee => employee.directReports,{
        onDelete:'SET NULL'
    })
    manager:Employee;

    @OneToMany(()=>Employee, emoloyee => emoloyee.manager)
    directReports:Employee[];

    @OneToOne(()=>ContactInfo, contactInfo => contactInfo.employee)
    contactInfo: ContactInfo

    @OneToMany(()=>Task,task=> task.employee)
    tasks: Task[];

    // Create Automatic reference table
    @ManyToMany(()=>Meeting, meeting=>meeting.attendees)
    @JoinTable()
    meetings:Meeting[]
  
}

