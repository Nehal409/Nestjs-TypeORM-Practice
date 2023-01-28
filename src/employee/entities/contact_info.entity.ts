import {Entity, PrimaryGeneratedColumn,Column, OneToOne, JoinColumn} from 'typeorm'
import { Employee } from './employee.entity';

@Entity()
export class ContactInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    phone: string;

    @Column()
    email: string;

    @Column()
    employee_id: number;
    // Delete this record if employee is deleted
    @OneToOne(()=> Employee, employee => employee.contactInfo, {onDelete:'CASCADE'})
    @JoinColumn() // on entity where you want relationship id to be 
    employee:Employee;

   
}