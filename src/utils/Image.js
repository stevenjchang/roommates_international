class Image {
  static getImageUrl(id) {
    if (!id) {
      return "";
    }
    if (typeof id !== "number") {
      console.log("Error: id is not a number (utils/Image) ==>");
      return "";
    }
    const formattedId = id.toString().length > 1 ? id : "0" + id;
    return `/img/listing/${formattedId}.jpg`;
  }
}

export default Image;
