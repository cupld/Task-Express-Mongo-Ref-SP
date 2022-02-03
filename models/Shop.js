const mongoose = require('mongoose');
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const ShopSchema  = new mongoose.Schema({
    name: String,
    image: String,
}
);

ShopSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });
module.exports = mongoose.model('Shop', ShopSchema);
