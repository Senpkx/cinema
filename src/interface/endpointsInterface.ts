import type { ReactNode } from "react";

export interface IEndpoints {
  name: string;
  year?: number;
}

export interface IChildrenProps {
  children: ReactNode;
}
