"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const staffs_module_1 = require("./staffs/staffs.module");
const students_module_1 = require("./students/students.module");
const courses_module_1 = require("./courses/courses.module");
const groups_module_1 = require("./groups/groups.module");
const lessons_module_1 = require("./lessons/lessons.module");
const attendance_module_1 = require("./attendance/attendance.module");
const payments_module_1 = require("./payments/payments.module");
const schedule_module_1 = require("./schedule/schedule.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            staffs_module_1.StaffsModule,
            students_module_1.StudentsModule,
            courses_module_1.CoursesModule,
            groups_module_1.GroupsModule,
            lessons_module_1.LessonsModule,
            attendance_module_1.AttendanceModule,
            payments_module_1.PaymentsModule,
            schedule_module_1.ScheduleModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map