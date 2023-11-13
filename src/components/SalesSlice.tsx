import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    type: "Combine",
    description: "International Harvester",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
    },
  },
  {
    id: "2",
    type: "Tractor",
    description: "John Deer 4640",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
    },
  },
];

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    salesAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(type, description, userId) {
        return {
          payload: {
            id: nanoid(),
            type,
            description,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { salesId, reaction } = action.payload;
      const existingSale = state.find((sales) => sales.id === salesId);
      if (existingSale) {
        existingSale.reactions[reaction]++;
      }
    },
  },
});

export const selectAllSales = (state) => state.sales;

export const { salesAdded, reactionAdded } = salesSlice.actions;

export default salesSlice.reducer;
