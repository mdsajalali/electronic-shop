import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
}

interface ProductsState {
  products: Product[];
  loading: boolean;
}

export const getProducts = createAsyncThunk<Product[]>("products", async () => {
  const response = await fetch("/products.json");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
});

const initialState: ProductsState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const productReducer = productSlice.reducer;
