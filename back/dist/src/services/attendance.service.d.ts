export declare class AttendanceService {
    createAttendance(data: {
        employeeId: string;
        checkInDateTime: Date;
        checkOutDateTime?: Date;
        status: 'PRESENT' | 'LATE' | 'ABSENT';
    }): unknown;
    getAttendancesByCompany(companyId: string): unknown;
    getAttendanceById(id: string): unknown;
    updateAttendance(id: string, data: {
        checkOutDateTime?: Date;
        status?: 'PRESENT' | 'LATE' | 'ABSENT';
    }): unknown;
    deleteAttendance(id: string): unknown;
}
//# sourceMappingURL=attendance.service.d.ts.map