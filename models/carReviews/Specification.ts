export interface Specification {
id: string;
title: string;
details: SpecificationDetail[];
}
export interface SpecificationDetail {
    id: string;
    title: string;
}
export interface PercentageSpecification {
    title: string;
    percentage: number;
  }