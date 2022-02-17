import { ConsumptionDifficulty, Difficulty, RevenueDifficulty, SatisfactionImpactDifficulty, WarehouseOutputDifficulty, WorkforceDifficulty } from "./difficulty";

export class DifficultyPresetsService {
    easy: Difficulty = {
        workforceDifficulty: WorkforceDifficulty.Plenty,
        consumptionDifficulty: ConsumptionDifficulty.Sparse,
        satisfactionImpactDifficulty: SatisfactionImpactDifficulty.None,
        revenueDifficulty: RevenueDifficulty.Plenty,
        warehouseOutputDifficulty: WarehouseOutputDifficulty.Plenty
    };

    medium: Difficulty = {
        workforceDifficulty: WorkforceDifficulty.Plenty,
        consumptionDifficulty: ConsumptionDifficulty.Medium,
        satisfactionImpactDifficulty: SatisfactionImpactDifficulty.None,
        revenueDifficulty: RevenueDifficulty.Medium,
        warehouseOutputDifficulty: WarehouseOutputDifficulty.Medium
    };

    expert: Difficulty = {
        workforceDifficulty: WorkforceDifficulty.Medium,
        consumptionDifficulty: ConsumptionDifficulty.Medium,
        satisfactionImpactDifficulty: SatisfactionImpactDifficulty.Medium,
        revenueDifficulty: RevenueDifficulty.Sparse,
        warehouseOutputDifficulty: WarehouseOutputDifficulty.Sparse
    };

    veteran: Difficulty = {
        workforceDifficulty: WorkforceDifficulty.Sparse,
        consumptionDifficulty: ConsumptionDifficulty.Plenty,
        satisfactionImpactDifficulty: SatisfactionImpactDifficulty.High,
        revenueDifficulty: RevenueDifficulty.Sparse,
        warehouseOutputDifficulty: WarehouseOutputDifficulty.Sparse
    };

    workforceSettings: WorkforceDifficulty[] = [
        WorkforceDifficulty.Plenty,
        WorkforceDifficulty.Medium,
        WorkforceDifficulty.Sparse
    ];

    consumptionSettings: ConsumptionDifficulty[] = [
        ConsumptionDifficulty.Sparse,
        ConsumptionDifficulty.Medium,
        ConsumptionDifficulty.Plenty
    ];

    satisfactionSettings: SatisfactionImpactDifficulty[] = [
        SatisfactionImpactDifficulty.None,
        SatisfactionImpactDifficulty.Medium,
        SatisfactionImpactDifficulty.High
    ];

    revenueSettings: RevenueDifficulty[] = [
        RevenueDifficulty.Plenty,
        RevenueDifficulty.Medium,
        RevenueDifficulty.Sparse
    ];

    warehouseSettings: WarehouseOutputDifficulty[] = [
        WarehouseOutputDifficulty.Plenty,
        WarehouseOutputDifficulty.Medium,
        WarehouseOutputDifficulty.Sparse
    ];
}