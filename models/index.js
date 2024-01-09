// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'id'});
// Categories have many Products
Category.hasMany(Product, { foreignKey: 'category_id'});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {through: 'product_id'});
// Tags belongToMany Products (through ProductTag)
ProductTag.belongsToMany(Product, {through: 'product_id'});

// Product.belongsTo(ProductTag, {foreignKey: 'product_id'});
// Tag.belongsTo(ProductTag, {foreignKey: 'tag_id'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
