const Category = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      let category = await Category.find();
      console.log("cek datanya category", category);

      res.render("admin/category/view_category", { category });
    } catch (error) {
      console.log("errrr", error);
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render("admin/category/create");
    } catch (error) {
      console.log("errrr", error);
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { name } = req.body;

      let category = await Category({
        name,
      });
      category.save();

      res.redirect("/category");
    } catch (error) {
      console.log("errrr", error);
    }
  },
  viewEdit: async (req, res) => {
    try {
      const { id } = req?.params;

      let category = await Category.findById(id);

      res.render("admin/category/edit", { category });
    } catch (error) {
      console.log("errrr", error);
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;

      let category = await Category.findByIdAndUpdate(id, {
        name,
      });

      res.redirect("/category");
    } catch (error) {
      console.log("errrr", error);
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;

      let category = await Category.findByIdAndDelete(id);

      if (category) {
        res.redirect("/category");
      }
    } catch (error) {
      console.log("errrr", error);
    }
  },
};
