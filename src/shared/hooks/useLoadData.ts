import { useEffect } from "react";
import { useGlobalAppDispatch } from "../../context/AppContext";
import { fetchCategories, fetchProducts } from "../../services/api/product.service";
import { mapperCategories, mapperProducts } from "../../services/mappers/product.mapper";
import { AppActions } from "../../types/app-types";


const useLoadData = () => {
    const dispatch = useGlobalAppDispatch();

    useEffect(() => {
        const loadProductsAndCategories = async () => {
            const products = await fetchProducts();
            const categories = await fetchCategories();

            const mappedProducts = mapperProducts(products);
            const mappedCategories = mapperCategories(categories);
            // Actualizar estado global con productos y categorías
            dispatch({ type: AppActions.SaveProducts, payload: mappedProducts });
            dispatch({ type: AppActions.SaveCategories, payload: mappedCategories });
        };

        loadProductsAndCategories();
    }, [dispatch]);
};

export default useLoadData;
