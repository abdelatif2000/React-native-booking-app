import axios from "axios";

export const getPlacesData = async (location) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      {
        params: {
          bl_latitude: location?.northeast?.lat,
          tr_latitude: location?.southwest?.lat,
          bl_longitude: location?.northeast?.lng,
          tr_longitude: location?.southwest?.lng,
          restaurant_tagcategory_standalone: "10591",
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "e2122a50afmsh054a080e836df5fp17c0ebjsn60f048c6494b",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
