/** A user of the app */
export interface User {
  id: string;
  name: string;
}

/** An individual that the app can create models for*/
export interface Participant {
  id: string;
  name: string;
}

/** A high level budget category such as "Food" or "Home" */
export interface BudgetCategory {
  id: string;
  name: string;
}

/** A lower level budget category such as "Restaurants", "Groceries", "Rent", or "Utilities" */
export interface BudgetSubCategory {
  id: string;
  name: string;
  /** The id associated with the parent, which must be a BudgetCategory */
  parentId: string;
}

/** A representation of what should change for a particular BudgetSubCategory at a point in time */
export interface BudgetLineItem {
  subCategoryId: string;
  /** If provided, the absolute value for this SubCategory at the given point in time */
  // TODO - Update to handle ranges
  value?: number;
  /** If provided, the rate per year that this budget item should grow or shrink */
  // TODO - Update to handle ranges
  changeRate?: number;
}

/**
 * Represents an snapshot of changes that should be made to a budget at a specific point in time.
 * When used in a BudgetSeries, BudgetEvents will inherit any unchanged values from the preceding event.
 */
export interface BudgetEvent {
  id: string;
  name: string;
  lineItems: BudgetLineItem[];
  date?: string;
  preRequisite?: PreRequisite;
}

/**
 * TODO
 * Any missing values inherit the values from the previous event in the sequence.
 */
export interface EventSeries {
  id: string;
  name: string;
  /** An ordered list of events. The pre-requisites for event i must be met before the prerequisites for event i+1 is */
  events: BudgetEvent[];
}

/** Conditions that must be met in order for for a particular event to be triggered.
 * If multiple conditions are provided, all conditions must be met to trigger the event.
 */
export interface PreRequisite {
  /** If provided, BudgetEvents will not be triggered until this net worth is achieved */
  minNetWorth?: number;
  /** If provided, BudgetEvents will not be triggered until this monthly cash flow is achieved */
  minCashFlow?: number;
  /** If provided, BudgetEvents will not be triggered until this liquid cash is available*/
  minLiquidCash?: number;
  /** If provided, BudgetEvents will not be triggered until after this startDate */
  startDate?: Date;
}
