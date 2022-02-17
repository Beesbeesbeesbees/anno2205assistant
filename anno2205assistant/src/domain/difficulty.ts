export interface Difficulty {
    workforceDifficulty: WorkforceDifficulty;
    consumptionDifficulty: ConsumptionDifficulty;
    satisfactionImpactDifficulty: SatisfactionImpactDifficulty;
    revenueDifficulty: RevenueDifficulty;
    warehouseOutputDifficulty: WarehouseOutputDifficulty;
}

export enum WorkforceDifficulty {
    Plenty = 'Plenty',
    Medium = 'Medium',
    Sparse = 'Sparse'
}

export enum ConsumptionDifficulty {
    Sparse = 'Sparse',
    Medium = 'Medium',
    Plenty = 'Plenty'
}

export enum SatisfactionImpactDifficulty {
    None = 'None',
    Medium = 'Medium',
    High = 'High'
}

export enum RevenueDifficulty {
    Plenty = 'Plenty',
    Medium = 'Medium',
    Sparse = 'Sparse'
}

export enum WarehouseOutputDifficulty {
    Plenty = 'Plenty',
    Medium = 'Medium',
    Sparse = 'Sparse'
}