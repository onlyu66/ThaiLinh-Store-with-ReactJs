import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const reponse = await axios.get("http://localhost:8000/products");
  return reponse.data;
});
// export const onNavigateNext = createAsyncThunk("onNavigateNext", async () => {
//   const reponse = await axios.get("http://localhost:8000/products");
//   return reponse.data;
// });
export const postProducts = createAsyncThunk(
  "postProducts",
  async (product) => {
    const response = await axios.post(
      "http://localhost:8000/products",
      product
    );
    return response.data;
  }
);
export const deleteProducts = createAsyncThunk(
  "deleteProducts",
  async (idProduct) => {
    await axios.delete(`http://localhost:8000/products/${idProduct}`);
    return idProduct;
  }
);
export const putProducts = createAsyncThunk(
  "putProducts",
  async (objProduct) => {
    const response = await axios.put(
      `http://localhost:8000/products/${objProduct.id}`,
      objProduct.inputForm
    );
    return response.data;
  }
);
export const sspProducts = createAsyncThunk(
  "sspProducts",
  async (sortTypeName, sortType, curPage, limitPerPage, searchInput) => {
    let url = `http://localhost:8000/products?_page=${curPage}_limit=${limitPerPage}`;
    if (searchInput) {
      url = `http://localhost:8000/products?q=${searchInput}&_sort=${sortTypeName}&_order=${sortType}&_page=${curPage}_limit=${limitPerPage}`;
    } else if (sortTypeName) {
      url = `http://localhost:8000/products?_sort=${sortTypeName}&_order=${sortType}&_page=${curPage}_limit=${limitPerPage}`;
    }

    const reponse = await axios.get(url);

    return reponse.data;
  }
);
export const searchProducts = createAsyncThunk(
  "searchProducts",
  async (query) => {
    const reponse = await axios.get(
      `http://localhost:8000/products?q=${query}`
    );

    return reponse.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
    productsPerPage: 10,
    currentPage: 1,
    phonesPerPage: 20,
    // searchInput: "",
  },
  reducers: {
    // fetchProducts: (state, action) => {
    //   state.products = [...action.payload];
    // },
    onNavigateNext: (state) => {
      state.currentPage++;
    },
    onNavigatePrev: (state) => {
      state.currentPage--;
    },
    // onNavigateNext:()=>{},
    onClickCurentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    // searchProduct: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "Success";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = "Error";
      });
    builder
      .addCase(sspProducts.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(sspProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "Success";
      })
      .addCase(sspProducts.rejected, (state, action) => {
        state.error = "Error";
      });
    builder
      .addCase(searchProducts.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        // state.searchInput = action.payload;
        state.status = "Success";
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.error = "Error";
      });

    builder.addCase(postProducts.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    });
    builder.addCase(putProducts.fulfilled, (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    });
  },
});

export default productSlice.reducer;
export const productAction = productSlice.actions;
