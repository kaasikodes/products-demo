export type TProduct = {
  id: number;
  name: string;
  type: TProductType;
  description: string;
  status: TProductStatus;
  createdAt: string;
};

export type TProductType = "general" | "electronics" | "agric";
export type TProductStatus = "pending" | "sold" | "expired";
