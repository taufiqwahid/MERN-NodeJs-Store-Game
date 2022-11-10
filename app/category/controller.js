module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", { title: "Expresssssss js" });
    } catch (error) {
      console.log("resss", error);
    }
  },
};
