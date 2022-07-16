export interface Specification {
id: string;
title: string;
details: SpecificationDetail[];
}
export interface SpecificationDetail {
    key: string;
    value: string;
}
export interface PercentageSpecification {
    title: string;
    percentage: number;
  }