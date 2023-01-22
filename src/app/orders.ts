export interface Orders {
    _id?: string;
   orderItems?: string;
   address?: 'junior' | 'mid' | 'senior';
   phone: string;
   status: string;
   totalPrice: string;
   user: string;
   dateOrdered: string;
}
