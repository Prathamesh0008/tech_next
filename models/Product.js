import mongoose from "mongoose";

const ProductImageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, default: "" },
    alt: { type: String, default: "" },
    sortOrder: { type: Number, default: 0 },
    isPrimary: { type: Boolean, default: false },
  },
  { _id: false }
);

const ProductTranslationSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    description: { type: String, default: "" },
    indication: { type: String, default: "" },
    presentation: { type: String, default: "" },
    precautions: { type: String, default: "" },
    contraindications: { type: String, default: "" },
    faq: { type: mongoose.Schema.Types.Mixed, default: [] },
    seo: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
      canonical: { type: String, default: "" },
    },
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    imageKey: { type: String, default: "" },
    cas: { type: String, default: "" },
    category: {
      type: String,
      enum: ["tablets", "injectables", "other"],
      default: "other",
      index: true,
    },
    images: { type: [ProductImageSchema], default: [] },
    translations: {
      type: Map,
      of: ProductTranslationSchema,
      default: {},
    },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
