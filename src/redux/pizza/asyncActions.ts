import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza, SearchPizzaParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import {PRODUCT_DATA} from "../../helpers/serverURL.ts";

export const getPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { sortBy, order, category, search, currentPage } = params;
        console.log(params, 4444);
        const { data } = await axios.get<Pizza[]>(PRODUCT_DATA, {
            params: pickBy(
                {
                    page: currentPage,
                    limit: 6,
                    category,
                    sortBy,
                    order,
                    search,
                },
                identity,
            ),
        });

        return data;
    },
);