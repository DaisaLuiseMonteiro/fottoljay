import type { PayRun, PayRunStatus } from '@prisma/client';
export declare class PayRunService {
    createPayRun(data: {
        companyId: string;
        periodStart: Date;
        periodEnd: Date;
        status?: PayRunStatus;
    }): Promise<PayRun>;
    getPayRunsByCompany(companyId: string): Promise<PayRun[]>;
    getPayRunById(id: string): Promise<PayRun | null>;
    updatePayRunStatus(id: string, status: PayRunStatus): Promise<PayRun>;
    updatePayRun(id: string, data: {
        periodStart?: Date;
        periodEnd?: Date;
        status?: PayRunStatus;
    }): Promise<PayRun>;
    finalizePayRun(id: string): Promise<PayRun>;
    updatePayslipStatus(payslipId: string, paymentStatus: 'PENDING' | 'PARTIAL' | 'PAID'): Promise<any>;
}
//# sourceMappingURL=payrun.service.d.ts.map