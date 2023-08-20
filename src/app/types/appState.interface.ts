import { Product } from '../shared/models/product.model';
export interface AppStateInterface {
  isAuthenticated: boolean
  productToUpdate: Product
}
