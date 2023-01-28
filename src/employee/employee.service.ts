import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactInfoDto } from './dto/create-contactInfo.dto';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateContactInfoDto } from './dto/update-contactInfo.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ContactInfo } from './entities/contact_info.entity';
import { Employee } from './entities/employee.entity';
import { Meeting } from './entities/meeting.entity';
import { Task } from './entities/task.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(ContactInfo) private contactInfoRepo: Repository<ContactInfo>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ){}

  createEmployee(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = this.employeeRepo.create(createEmployeeDto);
    return this.employeeRepo.save(newEmployee);
  }

  createContactInfo(createContactInfoDto: CreateContactInfoDto) {
    return 'This action adds a new employee';
  }

  createTask(createTaskDto: CreateTaskDto) {
    return 'This action adds a new employee';
  }

  createMeeting(createMeetingDto: CreateMeetingDto) {
    return 'This action adds a new employee';
  }

  findAll() {
    return this.employeeRepo.find();
    
  }

  findOne(id: number) {
    return this.employeeRepo.findOneBy({id});

  }

  updateEmployee(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  updateContactInfo(id: number, updateContactInfoDto: UpdateContactInfoDto) {
    return `This action updates a #${id} employee`;
  }

  updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} employee`;
  }

  updateMeeting(id: number, updateMeetingDto: UpdateMeetingDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
