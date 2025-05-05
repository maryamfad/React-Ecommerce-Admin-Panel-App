import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../constants";
import { toast } from "react-toastify";

const ListProducts = () => {
	const [list, setList] = useState([]);

	const fetchList = async () => {
		try {
			const response = await axios.get(backendUrl + "/api/product/list");
			if (response.success) {
				setList(response.data.products);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	useEffect(() => {
		fetchList();
	}, []);
	return <div></div>;
};

export default ListProducts;
