import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Meeting } from './entities/meeting.entity';
import { Task } from './entities/task.entity';
import { ContactInfo } from './entities/contact_info.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Employee,Meeting,Task,ContactInfo])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
