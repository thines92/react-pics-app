import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID 4b14b015b3964fffed7ef356c9b72491cff8ab171d75051fea96628ca7ea20b8"
	}
});
